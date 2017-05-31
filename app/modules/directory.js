
module.exports.directoryObject = function DirectoryObject()
{
    function Folder(name)
    {
      this.directory_name = name;
      this.children = []
      this.parentNode = null
      
      this.setPath = function(path_name)
      {
        this.path = path_name;
      }
      this.getPath = function()
      {
        return this.path;
      }
      
      this.checkName = function(check)
      {
        return check === this.directory_name;
      }
      this.addChild = function(element)
      {
        this.children.push(element);
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
  this.setPath = function(path_name)
  {
    this.currentPointer.setPath(path_name);
    return;
  }
  this.generate_pre_stage_helper = function(node)
  {
    if (node.children.length === 0)
    {
      return [];
    }
    var children_array = node.children;
    var result_array = _.map(children_array, function(element){
      return element.getPath();
    });
    var result_array = _.reduce(children_array, function(memo, element){ return memo.concat(this.generate_pre_stage_helper(element));}.bind(this), result_array);

    console.log("final_result");
    console.log(result_array);
    return result_array;
  }
  
  this.generate_pre_stage = function()
  {
    console.log(this.root);
    console.log( this.generate_pre_stage_helper(this.root));
    console.log("WHAT");
    return this.generate_pre_stage_helper(this.root);
  }
  
  this.addWithAbsolutePathHelper = function(paths, folder)
  {
    console.log(paths);
    if (paths.length === 1)
    {
      var newChild = new Folder(paths[0]);
      folder.addChild(newChild);
      return;
    }
    var present = false;
    console.log(folder.children);
    folder.children.forEach(function(element){
      console.log(element);
      if(element.checkName(paths[0])){
          this.addWithAbsolutePathHelper(paths.slice(1), element);
          present = true;
      }
    }, this);
    
    if (present == false)
    {
      var newChild = new Folder(paths[0]);
      folder.addChild(newChild);
      this.addWithAbsolutePathHelper(paths, folder);
    }
    
  }
  
  this.addWithAbsolutePath = function(path_name)
  {
    var expression1 = /(^\/(\w+\/*)+)$/gi;
    var expression2 = /(^\w+\/(\w+\/*)*)$/gi;
    var expression3 = /(^\w+$)/gi;
    
    if (path_name.match(expression1) !== null)
    {
      var matched_expression_array = path_name.match(expression1)[0].split("/").slice(1);
    }
    
    else if (path_name.match(expression2) !== null)
    {
      var matched_expression_array = path_name.match(expression2)[0].split('/');
    }
    
    else if (path_name.match(expression3) !== null)
    {
      var matched_expression_array = path_name.match(expression3);
    }
    else
    {
      return;
    }
    
    return this.addWithAbsolutePathHelper(matched_expression_array, this.currentPointer);
  }
  
  this.verifyFileHelper = function(paths, folder)
  {
    if (paths.length === 0)
    {
      return true;
    }
    var return_result = _.reduce(folder.children, function(memo, element) {
      if (element.checkName(paths[0]))
      {
        return true || memo;
      }
      return false || memo;
    }, false)
    
    return return_result;
  }
  
  this.verifyFile = function(path_name)
  {
    var expression1 = /(^\/(\w+\/*)+)$/gi;
    var expression2 = /(^\w+\/(\w+\/*)*)$/gi;
    var expression3 = /(^\w+$)/gi;
    
    if (path_name.match(expression1) !== null)
    {
      var matched_expression_array = path_name.match(expression1)[0].split("/").slice(1);
    }
    
    else if (path_name.match(expression2) !== null)
    {
      var matched_expression_array = path_name.match(expression2)[0].split('/');
    }
    
    else if (path_name.match(expression3) !== null)
    {
      var matched_expression_array = path_name.match(expression3);
    }
    else
    {
      return;
    }
    
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
        this.currentPointer.addChild(new_folder)
    }
  }

  this.createFile = function(file_name)
  {
    var new_file = new TextObject(file_name);
    if ((this.currentPointer.children.includes(file_name)) > -1)
    {
        this.currentPointer.addChild(new_file)
    }
  }
  
  this.displayContents = function()
  {
    for (var key in this.currentPointer.children)
    {
      console.log(key);
    }
  }

  this.displayCurrentPointer = function()
  {
    console.log(this.currentPointer);
  }
  
  
}
