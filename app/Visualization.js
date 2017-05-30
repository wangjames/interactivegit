import React from "react";
var Visualization = React.createClass({
    
    divStyle: function(name)
    {
        if (name === this.props.currentPointer)
        {
            return {
                color: "blue"
            };
        }
    },
    
    renderChildren: function(item)
    {
       return <Visualization directory={item} currentPointer={this.props.currentPointer}/>
    },
    render: function()
    {
        var item = this.props.directory;
        return (
            <div>
                <span style={this.divStyle(item.directory_name)}>{item.directory_name}</span>
                {item.children.map(this.renderChildren, this)}
            </div>
            )
    }
})

export default Visualization;