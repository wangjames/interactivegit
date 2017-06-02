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
        this.rollback = function(count)
        {
            var totalCount = this.commits.length;
            this.commits = this.commits.slice(0, (totalCount - count + 1));
        }
        
        this.returnHead = function()
        {
            return this.commits[(this.commits.length - 1)];
        }
    }
    
    function Stage()
    {
        this.stage = new directoryObject.directoryObject();
        this.pre_stage = [];
        
        this.addToPreStage = function(item)
        {
            this.pre_stage.push(item);
        }
        this.removeFromPreStage = function(item)
        {
            var index = this.pre_stage.indexOf(item);
            var array = this.pre_stage.slice(0,index).concat(this.pre_stage.slice(index+1))
            this.pre_stage = array;
        }
        
        this.addToStaging = function(item, final_object)
        {
            this.stage.addWithAbsolutePath(item, final_object);
        }
        
        this.returnStage = function()
        {
            return this.stage;
        }
        this.print_pre_stage = function()
        {
            console.log(this.pre_stage);
        }
    }

    this.currentBranch = new Branch("master");
    this.stagingArea = new Stage();
    this.rollback = function(count)
    {
        this.currentBranch.rollback(count);
    }
    this.add_to_pre_stage = function(file_name)
    {
        this.stagingArea.addToPreStage(file_name);
    }
    this.populate_pre_stage = function(directory)
    {
        var directory_list = directory.generate_pre_stage();
        console.log(directory_list);
        directory_list.forEach(function(element)
        {
            this.stagingArea.addToPreStage(element);
        }, this);
        this.stagingArea.print_pre_stage();
    };
    this.exportCommit = function()
    {
        console.log(this.currentBranch.returnHead());
        return this.currentBranch.returnHead();
    }
    this.stage_element = function(path_name, final_object)
    {
        console.log("this should be a textObject ->");
        console.log(final_object);
        this.stagingArea.removeFromPreStage(path_name);
        this.stagingArea.addToStaging(path_name, final_object);
    }
    
    this.makeCommit = function()
    {
        var commitTree = this.stagingArea.returnStage();
        console.log(commitTree);
        this.currentBranch.addCommit(commitTree);
    }

}