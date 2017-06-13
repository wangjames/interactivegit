
module.exports.gitBoat = function gitBoat()
{
  
  function GitRepo(name)
  {
    this.name = name;
    this.branches = {};
    this.pushBranch = function(branch_name, branch)
    {
      this.branches[branch_name] = branch;
    }
    this.returnName = function()
    {
      return this.name;
    }
   
  }
  this.repository_hash = {};
  this.generate_url = function(name)
  {
    return name + ".git";
  }
  this.create_repository = function(name)
  {
    var url = this.generate_url(name);
    if (this.repository_hash.hasOwnProperty(url))
    {
      return;
    }
    else
    {
      var newRepo = new GitRepo(name);
      this.repository_hash[url] = newRepo;
      return url;
    }
  }
  this.getRepository = function(repo_name)
  {
    var url = "";
    Object.keys(this.repository_hash).forEach(function(element)
    {
      if (this.repository_hash[element].returnName() === repo_name)
      {
        url = element;
      }
      
    }.bind(this))
    return this.repository_hash[url];
  }
  this.exportRepositories = function()
  {
    if (Object.keys(this.repository_hash) === 0)
    {
      return [];
    }
    var final_array = Object.keys(this.repository_hash).map(function(element)
    {
      return this.repository_hash[element].returnName();
    }.bind(this));
    return final_array;
  }
  this.pushBranch = function(url, branch_name, branch)
  {
    this.repository_hash[url].pushBranch(branch_name, branch);
  }
}


