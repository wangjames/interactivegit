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
        
    }
    rollback(count)
    {
        var totalCount = this.commits.length;
        this.commits = this.commits.slice(0, (totalCount - count));
    }

}

export default Branch;