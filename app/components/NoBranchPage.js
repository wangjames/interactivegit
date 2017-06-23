import React from "react";

class NoBranchPage extends React.Component
{
    render()
    {
        return (<div id="main-page-container">
            <div> Repository Name: {this.props.repository_name} - Url: {this.props.url}</div>
            <hr/>
            <div> No Contents </div>
            <button id="go-back-button" onClick={this.props.goToMain}> Return to Main </button>
            <button id="terminal-button" onClick={this.props.changeToTerminal}> Return to Terminal </button>
            
        </div>)
    }
}

export default NoBranchPage;