import React from "react";
var GitBoatVisualization = React.createClass({
    
    
    renderChildren: function(item)
    {
       return <GitBoatVisualization directory={this.props.directory} viewFile={this.props.viewFile}/>
    },
    openFile: function()
    {
        var file_name = this.props.directory.getPath();
        this.props.openEditing(file_name);
    },
    render: function()
    {
        var item = this.props.directory;
        if (item.type === "file")
        {
            return (
                <div>
                    <span onClick={this.viewFile}>{item.name}</span>
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

export default GitBoatVisualization;