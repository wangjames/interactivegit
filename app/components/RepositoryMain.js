class RepositoryMain extends React.Component {
    render()
    {
        return (
                <div>
                    <button onClick={this.commitList()} branch={this.props.currentBranch}> Go to Commit List </button>
                    <Visualization directory={this.state.directory.commit} openEditing={this.openEditing} currentPointer={this.state.directory.currentPointer.directory_name}/>
                </div>
                )
    }
}