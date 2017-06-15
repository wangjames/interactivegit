class TextObject
{
    constructor(file_name)
    {
      this.type = "file";
      this.name = file_name;
      this.text = "";
    }
    
    retrieveName()
    {
        return this.name;
    }
    
    setPath(path_name)
    {
        this.path = path_name;
    }
    
    getPath()
    {
        return this.path;
    }
    modifyContents(input_string)
    {
        this.text = input_string;
    }
    retrieveContents()
    {
        return this.text;
    }
      
    checkName(check)
    {
        return check === this.name;
    }
   
    createCopy()
    {
        var newCopy = new TextObject(this.name);
        newCopy.setPath(this.path);
        newCopy.modifyContents(this.text);
        return newCopy;
    }
}
