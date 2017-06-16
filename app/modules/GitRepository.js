import Branch from "./Branch";
import DirectoryObject from "./Directory";
import Stage from "./Stage";

class GitRepository
{
    constructor()
    {
        this.currentBranch = new Branch("master");
        this.branches = {}
        this.remotes = {}
        this.branches["master"] = this.currentBranch;
        this.stagingArea = new Stage();
    }
    
    addRemote(name, url)
    {
        this.remotes[name] = url;
    }
    rollback(count)
    {
        this.currentBranch.rollback(count);
    }
    track_changes(file_name)
    {
        this.add_to_pre_stage(file_name);
    }
    add_to_pre_stage(file_name)
    {
        this.stagingArea.addToPreStage(file_name);
    }
    populate_pre_stage(directory)
    {
        var directory_list = directory.generate_pre_stage();
        directory_list.forEach(function(element)
        {
            this.stagingArea.addToPreStage(element);
        }, this);
    };
    exportBranch(branch_name)
    {
        return this.branches[branch_name];
    }
    exportCommit()
    {
        return this.currentBranch.returnHead();
    }
    stage_element(path_name, copied_object)
    {
        this.stagingArea.removeFromPreStage(path_name);
        this.stagingArea.addToStaging(path_name, copied_object);
    }
    checkStatus()
    {
        return this.stagingArea.returnStatus();
    }
    makeCommit()
    {
        var commitTree = this.stagingArea.returnStage();
        var new_stage = commitTree.copy_directory();
        this.stagingArea.replaceStage(new_stage);
        this.currentBranch.addCommit(commitTree);
        
    }
    retrieveURL(name)
    {
        return this.remotes[name];
    }
}

export default GitRepository;