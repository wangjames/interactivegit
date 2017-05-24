

module.exports.directoryObject = function DirectoryObject()
{
    function Folder(name)
    {
      this.directory_name = name;
      this.children = []
      this.files = []
      this.parentNode = null
      
      this.setPath = function(path_name)
      {
        this.path = path_name;
      }
      this.getPath = function()
      {
        return this.path;
      }
      
      this.checkPath = function(check)
      {
        return check === this.path;
      }
    };
    
    function TextObject(file_name)
    {
        this.name = file_name;
        this.text = "";
    }
  this.root = new Folder("root");
  this.currentPointer = this.root;
  
  this.traverseToChild = function(name)
  {
    var children_array = this.currentPointer.children;
    function findChild(child) { 
      return child.directory_name === name;
    }
    var new_pointer = children_array.find(findChild);
    if (new_pointer != null)
    {
      this.currentPointer = new_pointer;
      return;
    }
    else
    {
      return;
    }
    
  }
  
  this.getPath = function()
  {
    return this.currentPointer.getPath();
  }
  
  
  this.addWithAbsolutePathHelper = function(paths, folder)
  {
    if (paths.length === 1)
    {
      folder.makeFile(paths[0]);
    }
    
    for (var value in folder.children)
    {
      if (value.checkPath(paths[0]))
      {
        this.addWithAbsolutePathHelper(paths.slice(1), value);
      }
    }
    
    folder.makeFile(paths[0]);
    this.addWithAbsolutePathHelper(paths, folder);
  }
  
  this.addWithAbsolutePath = function(path_name)
  {
    var expression = /\/(\w+\/*)*|\w+\/(\w+\/*)*|\w+/; 
    var matched_expression_array = path_name.match(expression);
    
    return this.addWithAbsolutePathHelper(matched_expression_array, this.currentPointer);
  }
  
  this.verifyFileHelper = function(paths, folder)
  {
    if (paths.length === 0)
    {
      return true;
    }
    
    for (var value in folder.children)
    {
      if (value.checkPath(paths[0]))
      {
        return this.verifyFileHelper(paths.slice(1), value);
      }
    }
    return false;
  }
  
  this.verifyFile = function(path_name)
  {
    var expression = /\/(\w+\/*)*|\w+\/(\w+\/*)*|\w+/; 
    var matched_expression_array = path_name.match(expression);
    
    return this.verifyFileHelper(matched_expression_array, this.currentPointer);
  }
  
  this.traverseBackwards = function()
  {
    if (this.currentPointer.parentNode != null)
    {
      this.currentPointer = this.currentPointer.parentNode;
    }
  }
  
  this.createFolder = function(directory_name)
  {
    var new_folder = new Folder(directory_name);
    if (!((this.currentPointer.children.indexOf(new_folder)) > -1))
    {
        new_folder.parentNode = this.currentPointer;
        var new_directory_name = this.currentPointer.getPath() + "/" + directory_name
        new_folder.setPath(new_directory_name);
        this.currentPointer.children.push(new_folder)
    }
  }

  this.createFile = function(file_name)
  {
    var new_file = new TextObject(file_name);
    if ((this.currentPointer.files.includes(file_name)) > -1)
    {
        this.currentPointer.files.push(new_file)
        
    }
  }
  
  this.displayContents = function()
  {
    for (var key in this.currentPointer.children)
    {
      console.log(key);
    }

    for (var key in this.currentPointer.files)
    {
      console.log(key);
    }
  }

  this.displayCurrentPointer = function()
  {
    console.log(this.currentPointer);
  }
  
  
}
