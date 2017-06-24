class Branch
{
    
    constructor(branch_name)
    {
        this.commits = [];
        this.branch_data = []
        this.name = branch_name;
    }
    copy_branch()
    {
        let new_copy = new Branch(this.name);
        this.commits.forEach(function(element, index)
        {
            let message = this.branch_data[index];
            let commit = this.commits[index].copy_directory();
            new_copy.addCommit(commit, message);
        }, this);
        return new_copy;
    }
    returnMessages()
    {
        return this.branch_data;
    }
    
    selectCommit(index)
    {
        return this.commits[index];
    }
    returnHead()
    {
        return this.commits[(this.commits.length - 1)];
    }
    addCommit(commitTree, message)
    {
        this.commits.push(commitTree);
        this.branch_data.push(message);
    }
    rollback(count)
    {
        var totalCount = this.commits.length;
        this.commits = this.commits.slice(0, (totalCount - count));
        this.branch_data = this.branch_data.slice(0, (totalCount - count));
    }
    returnLog()
    {
        let reversed_data = this.branch_data.reverse();
        let return_string = "";
        let totalCount = this.branch_data.length;
        reversed_data.forEach(function(element, index)
        {
            return_string += "Commit " + (totalCount - index);
            return_string += "\n";
            return_string += element;
            return_string += "\n";
        })
        
        return return_string;
    }

}

export default Branch;