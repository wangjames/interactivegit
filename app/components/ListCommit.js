class ListCommit extends React.Component{
    render()
    {
        return (<div>
                <button onClick={this.props.goBack}> Go Back </button>
                {this.props.branch.commits.map(function(element)
                {
                    return <div onClick={this.toggleCommit(commit)}> Commit </div>
                })}
                </div>
                )
    }
}