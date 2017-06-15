class Folder
{
    constructor(directory_name)
    {
        this.type = "folder";
        this.directory_name = directory_name;
        this.children = [];
        this.parentNode = null;
    }
    
    setPath(path_name)
    {
        this.path = path_name;
    }
    
    getPath()
    {
        return this.path;
    }
    
    retrieveName()
    {
        return this.directory_name;
    }
    
    checkName(check)
    {
        return check === this.directory_name;
    }
    
    addChild(element)
    {
        this.children.push(element);
    }
    
    contains(check_name)
    {
        let final_result = this.children.reduce(function(acc, element)
        {
            return acc || element.checkName(check_name);
        }, false);
        
        return final_result;
    }
    generate_children()
    {
        return this.generate_children_helper(this.children);
    }
    generate_children_helper(children_array)
    {
    
        if (children_array.length === 0)
        {
          return [];
        }
        
        var result_array = children_array.map(function(element){
          return element.getPath();
        });
        result_array = children_array.reduce(function(memo, element){ 
            if (element.type === "file")
            {
                return memo.concat([]);
            }
            else
            {
                return memo.concat(this.generate_children_helper(element.children));
            }}.bind(this), result_array);

        return result_array;
    }
    returnChildrenString()
    {
        let result_string;
        
        this.children.forEach(function(element)
        {
            result_string += element.retrieveName();
            result_string += " ";
        }, this);
        
        return result_string;
    }
}

export default Folder;