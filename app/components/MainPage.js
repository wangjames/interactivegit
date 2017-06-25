import React from "react";
import ListItem from "./ListItem";
class MainPage extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        let repository_list = "";
        if (this.props.repository_list.length === 0)
        {
            repository_list = <div> No Repositories Uploaded </div>
        }
        
        else
        {
            repository_list = this.props.repository_list.map(function(element, index){
                    return <ListItem key={index} open_function={this.props.openRepository} item={element} />
                }.bind(this))
        }
        return (<div id="main-page-container"> 
                <div> Main Page: </div>
                <hr/>
                {repository_list}
                <button id="create-button" onClick={this.props.create_repository}> Create Repository</button>
                <button id="terminal-button" onClick={this.props.returnTerminal}> Go Back To Terminal</button>
                </div>)
    }
}

export default MainPage;