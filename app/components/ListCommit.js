class ListCommit extends React.Component{
    render()
    {
        
        return (<div>
                <button onClick={this.props.goBack}> Go Back </button>
                {this.props.branch.commits.map(function(element, index)
                {
                    return <div onClick={this.propstoggleCommit(index)}> Commit </div>
                })}
                </div>
                )
    }
}