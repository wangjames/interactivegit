import React from "react";
import ListItem from "./ListItem";
class MainPage extends React.Component{
    constructor(props)
    {
        super(props);
        console.log(props);
        console.log("i'm right here");
    }
    render()
    {
        return (<div id="main-page-container"> 
                This is the main_page
                <button onClick={this.props.create_repository}> Create Repository</button>
                {this.props.repository_list.map(function(element){
                    return <ListItem open_function={this.props.openRepository} item={element} />
                }.bind(this))}
                <button onClick={this.props.returnTerminal}> Go Back To Terminal</button>
                </div>)
    }
}

export default MainPage;