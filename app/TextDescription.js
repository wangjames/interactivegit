import React from "react";
class TextDescription extends React.Component {
    render () {
        return (
            <div>
            {this.props.textArray.map(function(element)
                        {
                        return (
                        <p> {element} </p>
                        )
                        })}
            </div>
        )
    }
}

export default TextDescription;