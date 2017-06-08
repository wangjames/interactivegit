import React from "react";
class CreateRepository extends React.Component{
    render()
    {
        return (<div>
            <input type="text" onChange={this.props.handleChange} />
            <button onClick={this.props.submit_repository}> Submit </button>
            </div>)
    }
}
export default CreateRepository;