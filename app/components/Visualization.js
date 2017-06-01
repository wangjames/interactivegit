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
    openFile: function()
    {
        var file_name = this.props.directory.path_name;
        this.props.openEditing(file_name);
    },
    render: function()
    {
        var item = this.props.directory;
        if (this.props.directory.type === "file")
        {
            return (
                <div>
                    <span onClick={this.openFile}>{item.directory_name}</span>
                    {item.children.map(this.renderChildren, this)}
                </div>
            )
        }
        else
        {
            return (
                <details open style={this.divStyle(item.directory_name)}>
                    <summary style={this.divStyle(item.directory_name)}>{item.directory_name}</summary>
                    {item.children.map(this.renderChildren, this)}
                </details>
                )
            
        }
    }
})

export default Visualization;