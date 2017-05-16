

module.exports.directoryObject = function DirectoryObject()
{
    function Folder(name)
    {
      this.directory_name = name;
      this.children = []
      this.files = []
      this.parentNode = null
    };
    
    function TextObject(file_name)
    {
        this.name = file_name;
        this.text = "";
    }
  this.root = new Folder("root");
  this.currentPointer = this.root
  
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
  
  this.traverseBackwards = function()
  {
    this.currentPointer = this.currentPointer.parentNode;
  }

  this.createFolder = function(directory_name)
  {
    var new_folder = new Folder(directory_name);
    if (!((this.currentPointer.children.indexOf(new_folder)) > -1))
    {
        new_folder.parentNode = this.currentPointer;
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
