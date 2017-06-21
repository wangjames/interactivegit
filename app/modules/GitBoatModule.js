import GitRepo from "./GitRepo";
class GitBoatModule
{
  constructor(name)
  {
    this.repository_hash = {};
    this.url_hash = {};
  }
  generate_url(name)
  {
    return name + ".git";
  }
  
  create_repository(name)
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
  
  getUrl(repo_name)
  {
    return this.url_hash[repo_name];
  }
  getRepository(repo_name)
  {
    var url = this.getUrl(repo_name);
    return this.repository_hash[url];
  }
  exportRepositories()
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
  exportBranch(url, branch_name)
  {
    let gitRepo = this.repository_hash[url];
    return gitRepo.getBranch(branch_name);
  }
  pushBranch(url, branch_name, branch)
  {
    this.repository_hash[url].pushBranch(branch_name, branch);
  }
  
}

export default GitBoatModule;
