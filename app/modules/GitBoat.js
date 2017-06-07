
var gitBoat = function()
{
  
  function GitRepo(name)
  {
    this.name = name;
    this.branches = {};
    this.pushBranch = function(branch_name, branch)
    {
      this.branches[branch_name] = branch;
    }
   
  }
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
  this.pushBranch = function(url, branch_name, branch)
  {
    this.repository_hash[url].pushBranch(branch_name, branch);
  }
}


