var directoryObject = require('./directory')
module.exports.gitRepository = function GitRepository()
{
  
    function Branch(branch_name)
    {
        this.commits = []
        this.name = branch_name
        
        this.addCommit = function(commitTree)
        {
            this.commits.push(commitTree);
        }
        
    }
    
    function Stage()
    {
        this.stage = new directoryObject.DirectoryObject();
        this.pre_stage = [];
        
        this.addToPreStage = function(item)
        {
            this.pre_stage.push(item);
        }
        this.removeFromPreStage = function(item)
        {
            var index = array.indexOf(item);
            var array = this.pre_stage.slice(0,index).concat(this.pre_stage.slice(index+1))
            this.pre_stage = array;
        }
        
        this.addToStaging = function(item)
        {
            this.stage.addWithAbsolutePath(item);
        }
        
        this.returnStage = function()
        {
            return this.stage;
        }
    }

    this.currentBranch = new Branch("master");
    this.stagingArea = new Stage();
    
    this.populate_pre_stage = function(directory)
    {
        var directory_list = directory.generate_pre_stage();
        for (var element in directory_list)
        {
            this.stagingArea.addToPreStage(element);
        }
    }
    
    this.stage_element = function(path_name)
    {
        this.stagingArea.removeFromPreStage(path_name);
        this.stagingArea.addToStaging(path_name);
    }
    
    this.makeCommit = function()
    {
        var commitTree = this.stagingArea;
        this.currentBranch.addCommit(commitTree);
    }

}