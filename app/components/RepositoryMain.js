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
                <div id="repository-container">
                    <button onClick={this.props.changeToListCommit}> Go to List View </button>
                    <p>Repository URL: {this.props.url}</p>
                    <GitBoatVisualization directory={this.props.commit.root} viewFile={this.viewFile}/>
                    <TextDisplay currentFileName={this.state.currentFileName} content={this.state.content}/>
                    <button onClick={this.props.goToMain}> Go Back to Main Page </button>
                    <button onClick={this.props.returnTerminal}> Go Back to Terminal </button>
                </div>
                )
    }
}

export default RepositoryMain;