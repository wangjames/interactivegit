import React from "react";

class IndividualCommit extends React.Component
{
    constructor(props)
    {
        super(props);
        this.toggleCommit = props.toggleCommit.bind(this, props.index);
    }
    render()
    {
        return (<div onClick={this.toggleCommit}>
                Commit {this.props.index} : {this.props.message}
                </div>
            )
    }
}

export default IndividualCommit;