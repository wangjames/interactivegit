import React from "react";
class TextDescription extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 text-box">
                    {this.props.textArray.map(function(element, index)
                                {
                                return (
                                <p key={index}> {element} </p>
                                )
                                })}
                    </div>
                </div>
            </div>
        )
    }
}

export default TextDescription;