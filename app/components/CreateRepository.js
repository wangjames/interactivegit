import React from "react";
class CreateRepository extends React.Component{
    render()
    {
        return (<div id="create-container">
            <input type="text" onChange={this.props.handleChange} />
            <button onClick={this.props.submit_repository}> Submit </button>
            <button onClick={this.props.goToMain}> Go Back To Main </button>
            <button onClick={this.props.returnTerminal}> Go Back to Terminal </button>
            </div>)
    }
}
export default CreateRepository;