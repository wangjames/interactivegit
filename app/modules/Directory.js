import TextObject from "./TextObject";
import Folder from "./Folder";
class Directory
{
  constructor()
  {
    this.root = new Folder("root");
    this.currentPointer = this.root;
    this.root.setPath("/root");
  }
  change_root(folder)
  {
    this.root = folder;
    this.currentPointer = this.root;
  }
  copy_helper(copy_node)
  {
    if (copy_node.type === "file")
    {
      return copy_node.createCopy();
    }
    
    else
    {
      
      if (copy_node.hasChildren === false)
      {
        return [];
      }
      
      let new_folder_name = copy_node.retrieveName();
      let children_array = copy_node.getChildren();
      let newFolder = new Folder(new_folder_name);
      newFolder.setPath(copy_node.getPath());
      children_array = children_array.map(function(element)
      {
        return this.copy_helper(element);
      }, this)
      newFolder.setChildren(children_array);
      return newFolder;
    }
  }
  copy_directory()
  {
    let new_root = this.copy_helper(this.root);
    let new_directory = new Directory();
    new_directory.change_root(new_root);
    return new_directory;
  }
  returnRoot()
  {
    return this.root;
  }
  
  traverseToChild(name)
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
  traverseToChild(name)
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
  retrieveByPathName(path_name)
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
      return this.retrievebyPathHelper(matched_expression_array.slice(1), this.root);
    }
  }
  retrievebyPathHelper(paths, folder)
  {
    var final_element = undefined;
    function find_element(element)
    {
      return element.checkName(paths[0])
    }
    
    final_element = folder.children.find(find_element);
    if (paths.length === 1)
    {
      return final_element;
    }
    else
    {
      return this.retrievebyPathHelper(paths.slice(1), final_element);
    }
    
  }
  getPath()
  {
    return this.currentPointer.getPath();
  }
  
  setPath(path_name)
  {
    this.currentPointer.setPath(path_name);
    return;
  }
  
  generate_children_helper(node)
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
    var result_array = children_array.map(function(element){
      return element.getPath();
    });
    var result_array = children_array.reduce(function(memo, element){ return memo.concat(this.generate_children_helper(element));}.bind(this), result_array);
    return result_array;
  }
  generate_children(node)
  {
    return this.generate_children_helper(node);
  }
  generate_pre_stage()
  {
    return this.generate_children(this.root);
  }
  generate_current_children()
  {
    return this.generate_children(this.currentPointer);
  }
  addWithAbsolutePathHelper(paths, folder, copied_object)
  {
    if (paths.length === 1)
    {
      var new_directory_name = folder.getPath() + "/" + paths[0];
      // if object is folder, and the folder already has the object, then continue
      if (folder.contains(paths[0]) && copied_object.type === "folder")
      {
        return;
      }
      // if the folder is not there, create the folder
      if (copied_object.type === "folder") 
      {
        var newChild = new Folder(paths[0]);
        newChild.setParentNode(folder);
        newChild.setPath(new_directory_name);
        folder.addChild(newChild);
        return;
      }
      
      // if the object is a file, copy the file and add it to the folder.
      else
      {
        
        var newChild = copied_object.createCopy();
        newChild.setPath(new_directory_name);
        newChild.setParentNode(folder);
        folder.removeNode(paths[0]);
        folder.addChild(newChild);
        return;
      }
      
    }
    
    function find_element(element)
    {
      return element.checkName(paths[0]);
    }
    
    var selected_object = folder.children.find(find_element);
    
    if (selected_object === undefined)
    {
      var new_directory_name = folder.getPath() + "/" + paths[0];
      var newChild = new Folder(paths[0]);
      newChild.setParentNode(folder);
      newChild.setPath(new_directory_name)
      folder.addChild(newChild);
      
      
      this.addWithAbsolutePathHelper(paths, folder, copied_object);
    }
    
    else
    {
      this.addWithAbsolutePathHelper(paths.slice(1), selected_object, copied_object);
    }
    
    
  }
  
  addWithAbsolutePath(path_name, copied_object)
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
  
  verifyFileHelper(paths, folder)
  {
    if (paths.length === 0)
    {
      return true;
    }
    var return_result = folder.children.reduce(function(memo, element) {
      if (element.checkName(paths[0]))
      {
        return true || memo;
      }
      return false || memo;
    }, false)
    
    return return_result;
  }
  
  verifyFile(path_name)
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
  
  traverseBackwards()
  {
    if (this.currentPointer.parentNode != null)
    {
      this.currentPointer = this.currentPointer.parentNode;
    }
  }
  
  createFolder(directory_name)
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

  createFile(file_name)
  {
    var new_file = new TextObject(file_name);
    
    var new_directory_name = this.currentPointer.getPath() + "/" + file_name
    new_file.setPath(new_directory_name);
    this.currentPointer.addChild(new_file)
  }
  
  displayContents()
  {
    for (var key in this.currentPointer.children)
    {
      console.log(key);
    }
  }

  showCurrentPointer()
  {
    return this.currentPointer.getPath();
  }
  
  displayCurrentChildren()
  {
    return this.currentPointer.returnChildrenString();
  }
}
  
export default Directory;
