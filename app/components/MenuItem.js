import React from "react";

class MenuItem extends React.Component {
    render () {
        return (
            <details>
                <summary> {this.props.summary} </summary>
                <p> {this.props.paragraph} </p>
            </details>
            )
    }
}

export default MenuItem