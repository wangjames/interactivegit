
var gitBoat = function()
{
  
  function GitRepo()
  {
    this.branch = [];
    this.pushBranch = function(branch)
    {
      this.branches.push(branch);
    }
  }
  
  this.generateURL = function(name)
  {
    if (this.repository_hash.hasOwnProperty(name))
    {
      return;
    }
    else
    {
      var url = name + ".git";
      var newRepo = new GitRepo();
      this.repository_hash[url] = newRepo;
      return;
    }
  }
  
  this.addRepository = function(name)
  {
    this.repositories[name] = new Repository();
  }
  this.pushBranch = function(url, branch)
  {
    this.repository_hash[url].pushBranch(branch);
  }
}



<div id="box">
  <p>Git Boat</p>
  User: <input id="user"></input>
  <br>
  <br>
  Password: <input id="password"></input>
  <br>
  <br>
<button> Submit </button>
</div>

#box
{
  border: 1px solid black;
  height: 500px;
  width: 1000px;
}

