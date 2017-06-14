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
                <div>
                    <GitBoatVisualization directory={this.props.commit.root} viewFile={this.viewFile}/>
                    <TextDisplay currentFileName={this.state.currentFileName} content={this.state.content}/>
                </div>
                )
    }
}

export default RepositoryMain;