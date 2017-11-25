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
                    <h4 className="card-title"> {title} </h4>
                    {content.map(function(element, index, array)
                    {
                        if (index == array.length - 1) {
                            return (<p key={index} style={{"font-weight":"bold"}} className="class-text">{element}</p>)
                        }
                        return (<p key={index}className="class-text">{element}</p>)
                    })}
                </div>
            </div>
            )
    }
}

export default LinkItem;