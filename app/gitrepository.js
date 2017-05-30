var directoryObject = require('./directory')
module.exports.gitRepository = function GitRepository()
{
  
    function Branch(branch_name)
    {
        this.commits = []
        this.name = branch_name
        this.count = 0;
        this.addCommit = function(commitTree)
        {
            var metadata = {}
            this.commits.push(commitTree);
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
        
        this.addToStaging = function(item)
        {
            this.stage.addWithAbsolutePath(item);
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