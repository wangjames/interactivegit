class RepositoryMain extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            currentFile: "",
            content: ""
        }
    }
    viewFile(file_name){
        
        var file_contents = this.state.directory.retrieveByPathName(file_name).retrieveContents();
        this.setState({currentFileName: file_name, content: file_contents});
    }
    
    render()
    {
        return (
                <div>
                    <button onClick={this.commitList()} branch={this.props.currentBranch}> Go to Commit List </button>
                    <GitBoatVisualization directory={this.props.currentCommit} viewFile={this.viewFile}/>
                    <TextDisplay currentFileName={this.state.currentFileName} content={this.state.content}/>
                </div>
                )
    }
}