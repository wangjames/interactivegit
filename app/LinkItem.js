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
        let title = this.props.content[0];
        let content = this.props.content[1];
        return (
            <div onClick={this.goToLink} className="col-md-4">
                <div className="box">
                    <h4> {title} </h4>
                    <p>{content}</p>
                </div>
            </div>
            )
    }
}

export default LinkItem;