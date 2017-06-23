import React from "react";
import GitBoatVisualization from "./GitBoatVisualization";
import TextDisplay from "./TextDisplay";
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
        var root = this.props.commit.returnRoot();
        return (
                <div id="main-page-container">
                    <button id="go-back-button" onClick={this.props.goToMain}> Go Back to Main</button>
                    <button id="terminal-button" onClick={this.props.returnTerminal}> Go Back to Terminal</button>
                    <span> Name: {this.props.repository_name} - Repository URL: {this.props.url}</span>
                    <button id="list-button" onClick={this.props.changeToListCommit}> List of Commits </button>
                    <hr />
                    <GitBoatVisualization directory={this.props.commit.root} viewFile={this.viewFile}/>
                    <TextDisplay currentFileName={this.state.currentFileName} content={this.state.content}/>
                    
                </div>
                )
    }
}

export default RepositoryMain;