import React from "react";
class CreateRepository extends React.Component{
    render()
    {
        return (<div id="main-page-container">
            <div> Create a Repository </div>
            <hr/>
            <button id="go-back-button" onClick={this.props.goToMain}> Go Back To Main </button>
            <button id="terminal-button" onClick={this.props.returnTerminal}> Go Back to Terminal </button>
            <input type="text" onChange={this.props.handleChange} />
            <button id="submit-button" onClick={this.props.submit_repository}> Submit </button>
            
            </div>)
    }
}
export default CreateRepository;