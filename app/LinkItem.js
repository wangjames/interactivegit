import React from "react";

class LinkItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.goToLink = props.goToLink.bind(this, props.index);
    }
    render()
    {
        return (
            <div onClick={this.goToLink} className="col-md-4 box">
                <p>{this.props.content}</p>
            </div>
            )
    }
}

export default LinkItem;