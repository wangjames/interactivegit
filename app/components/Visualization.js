import React from "react";
class Visualization extends React.Component{
        constructor(props)
        {
            super(props);
            this.openFile = this.openFile.bind(this)
            this.renderChildren = this.renderChildren.bind(this)
        }
        nodeStyle(level)
        {
            let indent = level * 5;
            indent = indent.toString() + "px";
            return {
                "marginLeft": indent
            }
        }
        
        renderChildren(item, index)
        {
           let new_level = this.props.level + 1;
           return <Visualization key={index} level={new_level}openEditing={this.props.openEditing} directory={item} currentPointer={this.props.currentPointer}/>
        }
        
        openFile()
        {
            var file_name = this.props.directory.getPath();
            this.props.openEditing(file_name);
        }
        
        render()
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
        
        
}

export default Visualization;