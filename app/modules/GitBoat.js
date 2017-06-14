
module.exports.gitBoat = function gitBoat()
{
  
  function GitRepo(name)
  {
    this.name = name;
    this.branches = {};
    this.getBranch = function(branch_name)
    {
      return this.branches[branch_name];
    }
    this.pushBranch = function(branch_name, branch)
    {
      this.branches[branch_name] = branch;
    }
    this.returnName = function()
    {
      return this.name;
    }
    
    this.containBranch = function(element)
    {
      return this.branches.hasOwnProperty(element);
    }
   
  }
  this.repository_hash = {};
  this.url_hash = {};
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
      this.url_hash[name] = url;
      return;
    }
  }
  this.getUrl = function(repo_name)
  {
    return this.url_hash[repo_name];
  }
  this.getRepository = function(repo_name)
  {
    var url = this.getUrl(repo_name);
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


