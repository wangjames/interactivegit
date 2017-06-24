import React from "react";
var Visualization = React.createClass({
    nodeStyle: function(level)
    {
        let indent = level * 5;
        indent = indent.toString() + "px";
        return {
            "marginLeft": indent
        }
    },
    renderChildren: function(item)
    {
       let new_level = this.props.level + 1;
       return <Visualization level={new_level}openEditing={this.props.openEditing} directory={item} currentPointer={this.props.currentPointer}/>
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
                    <span style={this.nodeStyle(this.props.level)} onClick={this.openFile}>{item.name}</span>
                </div>
            )
        }
        else
        {
            return (
                <details style={this.nodeStyle(this.props.level)} open>
                    <summary>{item.directory_name}</summary>
                    {item.children.map(this.renderChildren, this)}
                </details>
                )
            
        }
    }
})

export default Visualization;