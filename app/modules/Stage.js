import DirectoryObject from "./Directory";
class Stage
{
    constructor()
    {
        this.stage = new DirectoryObject();
        this.pre_stage = []
    }
    replaceStage(new_stage)
    {
        this.stage = new_stage;
    }
    addToPreStage(item)
    {
        this.pre_stage.push(item);
    }
    removeFromPreStage(item)
    {
        var index = this.pre_stage.indexOf(item);
        var array = this.pre_stage.slice(0,index).concat(this.pre_stage.slice(index+1))
        this.pre_stage = array;
    }
        
    addToStaging(item, copied_object)
    {
        this.stage.addWithAbsolutePath(item, copied_object);
    }
    
    returnStage()
    {
        return this.stage;
    }
    print_pre_stage()
    {
        console.log(this.pre_stage);
    }
}

export default Stage;