import React from "react";

class Editor extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            value: props.content
        }
        this.modifyFile = this.modifyFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    modifyFile()
    {
        this.props.submit(this.props.file, this.state.value);
    }
    handleChange(event)
    {
        this.setState({value: event.target.value});
    }
    render()
    {
        return (
            <div>
                <textarea id="textbox" value={this.state.value} onChange={this.handleChange} ></textarea>
                <button id="submit" onClick={this.modifyFile}>submit</button>
                <span id="displaytext"></span>
            </div>)
    }
}

export default Editor;