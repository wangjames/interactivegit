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
       return <Visualization openEditing={this.props.openEditing} directory={item} currentPointer={this.props.currentPointer}/>
    },
    openFile: function()
    {
        var file_name = this.props.directory.getPath();
        console.log(file_name);
        this.props.openEditing(file_name);
    },
    render: function()
    {
        var item = this.props.directory;
        if (this.props.directory.type === "file")
        {
            return (
                <div>
                    <span onClick={this.openFile}>{item.name}</span>
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