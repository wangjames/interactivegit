var React = require('react');
var ReactDOM = require('react-dom');
var directoryObject = require('./directory');
var JQConsole = require('./jqconsole');

require("./index.css");

var Visualization = React.createClass({
    
    
    renderChildren: function(item)
    {
       return <Visualization directory={item}/>
    },
    render: function()
    {
        var item = this.props.directory;
        return (
            <div>
                <span>{item.directory_name}</span>
                {item.children.map(this.renderChildren, this)}
            </div>
            )
    }
})
var App = React.createClass({
    componentDidMount: function()
    {
        $(function () {
        var jqconsole = $('#console').jqconsole('Hi\n', '>>>');
        var startPrompt = function () {
          // Start the prompt with history enabled.
          jqconsole.Prompt(true, function (input) {
            // Output input with the class jqconsole-output.
            jqconsole.Write(input + '\n', 'jqconsole-output');
            // Restart the prompt.
            startPrompt();
          });
        };
        startPrompt();
      });
    },
    getInitialState: function()
    {
        var directobject = new directoryObject.directoryObject();
        directobject.createFolder("hi");
        directobject.createFolder("hey");
        directobject.traverseToChild("hey");
        directobject.createFolder("yes");
        directobject.traverseBackwards();
        directobject.traverseToChild('hi');
        directobject.createFolder("yoyoyo");
        directobject.traverseBackwards();
        return {directory: directobject.currentPointer};
    },
    render : function()
    {
        return (
            <div>
                <Visualization directory={this.state.directory}/>
                <div id="console"></div>
            </div>
            )
    
    }
})

ReactDOM.render(<App />, document.getElementById('app'))

