
module.exports.directoryObject = function DirectoryObject()
{
    function Folder(name)
    {
      this.type = "folder";
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
      this.retrieveName = function()
      {
        return this.directory_name;
      }
      this.checkName = function(check)
      {
        return check === this.directory_name;
      }
      this.addChild = function(element)
      {
        this.children.push(element);
      }
      
      this.contains = function(check_name){
        var final_result = false;
        this.children.forEach(function(element)
        {
          if (element.checkName(check_name))
          {
            var final_result = true;
          }
        }, this)
        return final_result;
      }
      
      this.returnChildrenString = function()
      {
        var result_string = ""
        this.children.forEach(function(element)
        {
          result_string += element.retrieveName();
          result_string += " "
        }, this)
        return result_string;
      }
  };
    
  function TextObject(file_name)
  {
      this.type = "file";
      this.name = file_name;
      this.text = "";
      this.retrieveName = function()
      {
        return this.name;
      }
      this.setPath = function(path_name)
      {
        this.path = path_name;
      }
      this.getPath = function()
      {
        return this.path;
      }
      this.modifyContents = function(input_string)
      {
        this.text = input_string;
      }
      this.retrieveContents = function()
      {
        return this.text;
      }
      
      this.checkName = function(check)
      {
        return check === this.name;
      }
      
      this.createCopy = function()
      {
        var newCopy = new TextObject(this.name);
        newCopy.setPath(this.path);
        newCopy.modifyContents(this.text);
        return newCopy;
      }
  }
  
  this.root = new Folder("root");
  this.currentPointer = this.root;
  this.root.setPath("/root");
  
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
  this.retrieveByPathName = function(path_name)
  {
    var expression1 = /(^\/(\w+\/*)+)$/gi;
    var expression2 = /(^\w+\/(\w+\/*)*)$/gi;
    var expression3 = /(^\w+$)/gi;
    console.log(path_name);
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
    if (this.root.checkName(matched_expression_array[0]))
    {
      return this.retrievebyPathHelper(matched_expression_array.slice(1), this.root);
    }
  }
  
  this.retrievebyPathHelper = function(paths, folder)
  {
    console.log(paths);
    console.log(folder);
    console.log("check here");
    var final_element = undefined;
    if (paths.length === 1)
    {
      var selected_file = "";
      var final_element = undefined;
      folder.children.forEach(function(element)
      {
        if (element.checkName(paths[0]))
        {
          final_element = element;
        }
      }, this)
      console.log("are you serious");
      return final_element;
    }
    
    folder.children.forEach(function(element){
      if (element.checkName(paths[0]))
      {
        
        final_element = this.retrievebyPathHelper(paths.slice(1), element);
      }
    }, this)
    return final_element;
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
  
  this.generate_children_helper = function(node)
  {
    if (node.type === "file")
    {
      return [];
    }
    if (node.children.length === 0)
    {
      return [];
    }
    
    var children_array = node.children;
    var result_array = _.map(children_array, function(element){
      return element.getPath();
    });
    var result_array = _.reduce(children_array, function(memo, element){ return memo.concat(this.generate_children_helper(element));}.bind(this), result_array);

    console.log("final_result");
    console.log(result_array);
    return result_array;
  }
  this.generate_children = function(node)
  {
    return this.generate_children_helper(node);
  }
  this.generate_pre_stage = function()
  {
    return this.generate_children(this.root);
  }
  this.generate_current_children = function()
  {
    return this.generate_children(this.currentPointer);
  }
  this.addWithAbsolutePathHelper = function(paths, folder, copied_object)
  {
    console.log(paths);
    var present = false;
    if (paths.length === 1)
    {
      if(folder.contains(paths[0]) && copied_object.type === "folder")
      {
        return;
      }
      
      if (copied_object.type === "folder")
      {
        var newChild = new Folder(paths[0]);
        folder.addChild(newChild);
        return;
      }
      
      else
      {
        var newChild = copied_object.createCopy();
        folder.addChild(newChild);
        return;
      }
      
    }
    
    folder.children.forEach(function(element){
      console.log(element);
      if(element.checkName(paths[0])){
          this.addWithAbsolutePathHelper(paths.slice(1), element, copied_object);
          present = true;
      }
    }, this);
    
    if (present == false)
    {
      var newChild = new Folder(paths[0]);
      folder.addChild(newChild);
      this.addWithAbsolutePathHelper(paths, folder, copied_object);
    }
    
  }
  
  this.addWithAbsolutePath = function(path_name, copied_object)
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
    if (this.root.checkName(matched_expression_array[0]))
    {
      return this.addWithAbsolutePathHelper(matched_expression_array.slice(1), this.root, copied_object);
    }
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
    
    var new_directory_name = this.currentPointer.getPath() + "/" + file_name
    new_file.setPath(new_directory_name);
    console.log("here is the folder");
    console.log(this.currentPointer);
    this.currentPointer.addChild(new_file)
  }
  
  this.displayContents = function()
  {
    for (var key in this.currentPointer.children)
    {
      console.log(key);
    }
  }

  this.showCurrentPointer = function()
  {
    return this.currentPointer.getPath();
  }
  
  this.displayCurrentChildren = function()
  {
    return this.currentPointer.returnChildrenString();
  }
  
}
