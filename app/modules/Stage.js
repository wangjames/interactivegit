import DirectoryObject from "./Directory";
class Stage
{
    constructor()
    {
        this.stage = new DirectoryObject();
        this.pre_stage = [];
        this.added = [];
    }
    replaceStage(new_stage)
    {
        this.stage = new_stage;
        this.added = [];
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
        this.added.push(item);
        this.stage.addWithAbsolutePath(item, copied_object);
    }
    
    returnStage()
    {
        return this.stage;
    }
    returnStatus()
    {
        
        let string_1 = "";
        this.added.forEach(function(element)
        {
            string_1 += element;
            string_1 += " "
        })
        let string_2 = "";
        this.pre_stage.forEach(function(element)
        {
            string_2 += element;
            string_2 += " "
        })
        let final_string = "List of files in stage ready to be committed\n"
        final_string += string_1
        final_string += "\n";
        final_string += "List of files ready to be added to stage\n";
        final_string += string_2;
        final_string += "\n";
        return final_string;
    }
    print_pre_stage()
    {
        console.log(this.pre_stage);
    }
}

export default Stage;