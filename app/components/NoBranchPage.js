import React from "react";

class NoBranchPage extends React.Component
{
    render()
    {
        return (<div>
            This is the url: {this.props.url}
            <button onClick={this.props.changeToTerminal}> Return to Terminal </button>
        </div>)
    }
}

export default NoBranchPage;