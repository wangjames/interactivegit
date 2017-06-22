import React from "react";

class NoBranchPage extends React.Component
{
    render()
    {
        return (<div id="no-branch-container">
            This is the url: {this.props.url}
            <button onClick={this.props.changeToTerminal}> Return to Terminal </button>
            <button onClick={this.props.goToMain}> Return to Main </button>
        </div>)
    }
}

export default NoBranchPage;