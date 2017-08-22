import React from "react";

class GitBoatVisualization extends React.Component
{
    constructor(props)
    {
        super(props);
        this.openFile = this.openFile.bind(this)
        this.renderChildren = this.renderChildren.bind(this)
    }
    renderChildren(item, index)
    {
       return <GitBoatVisualization key={index}directory={item} viewFile={this.props.viewFile}/>
    }
    openFile()
    {
        var file_name = this.props.directory.getPath();
        this.props.openEditing(file_name);
    }
    render()
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
}

export default GitBoatVisualization;