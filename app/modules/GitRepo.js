class GitRepo
{
    constructor(name)
    {
        this.name = name;
        this.branches = {};
    }

    getBranch(branch_name)
    {
      return this.branches[branch_name];
    }
    pushBranch(branch_name, branch)
    {
      this.branches[branch_name] = branch;
    }
    returnName()
    {
      return this.name;
    }

    containBranch(element)
    {
      return this.branches.hasOwnProperty(element);
    }

}

export default GitRepo;