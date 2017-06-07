import React from "react";
class TextDisplay extends React.Component{
    render()
    {
        return (
        <div>
            <div>{this.props.currentFile}</div>
            <div>{this.props.content} </div>
            </div>
            )
    }
}
export default TextDisplay;