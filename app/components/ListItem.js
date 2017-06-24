import React from "react";

class ListItem extends React.Component
{
    constructor(props)
    {
        super(props);
        this.open_function = props.open_function.bind(this, props.item);
    }
    render()
    {
        return (<div onClick={this.open_function}>
                Repository : {this.props.item}
                </div>
            )
    }
}

export default ListItem;