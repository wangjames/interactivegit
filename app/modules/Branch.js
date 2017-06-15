class Branch
{
    
    constructor(branch_name)
    {
        this.commits = [];
        this.name = branch_name;
    }

    returnHead()
    {
        return this.commits[(this.commits.length - 1)];
    }
    addCommit(commitTree)
    {
        this.commits.push(commitTree);
        console.log("here are the commits");
        console.log(this.commits);
        console.log(commitTree);
        console.log(commitTree.generate_current_children());
    }
    rollback(count)
    {
        var totalCount = this.commits.length;
        this.commits = this.commits.slice(0, (totalCount - count));
        console.log(this.commits);
    }

}

export default Branch;