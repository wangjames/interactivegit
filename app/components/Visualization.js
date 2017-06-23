import React from "react";
var Visualization = React.createClass({
    
    renderChildren: function(item)
    {
       return <Visualization openEditing={this.props.openEditing} directory={item} currentPointer={this.props.currentPointer}/>
    },
    openFile: function()
    {
        var file_name = this.props.directory.getPath();
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
                <details open>
                    <summary>{item.directory_name}</summary>
                    {item.children.map(this.renderChildren, this)}
                </details>
                )
            
        }
    }
})

export default Visualization;