var React = require('react');
var ReactDOM = require('react-dom');
var directoryObject = require('./directory');
var JQConsole = require('./jqconsole');

require("./index.css");

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
var App = React.createClass({
    parseCommand: function(input)
    {
        var command_split = input.split(" ");
        if (command_split[0] === "cd")
        {
            if (command_split[1] === "../")
            {
                this.traverseBack();
                return "";
            }
            this.changeDirectory(command_split[1]);
            return "";
        }
        else if (command_split[0] === "mkdir")
        {
            this.makeDirectory(command_split[1]);
            return "";
        }
        else if (command_split[0] === "touch")
        {
            this.createFile(command_split[1]);
            return "";
        }
        else if (command_split[0] === "git")
        {
            if (command_split[1] === "init")
            {
                this.createGitRepository();
            }
        
            else if (command_split[1] === "add")
            {
                this.addToStagingArea(command_split[2]);
            }
            
            else if (command_split[1] === "commit")
            {
                this.makeCommit();
            }
            
            else if (command_split[1] === "push" && command_split[2] === "origin" && command_split[3] === "master")
            {
                this.pushToRemote();
            }
            
            else if (command_split[1] === "merge")
            {
                this.mergeBranches();
            }
            
            else if (command_split[1] === "status")
            {
                this.checkStatus();
            }
            
        }
        
    },
    checkStatus: function()
    {
        var repository = this.state.repo;
        var currentDirectory = this.state.currentDirectory;
        
        return this.state.repo.currentStatus(currentDirectory);
    },
    addToStagingArea: function(file_name)
    {
        var currentDirectory = this.state.currentDirectory;
        var currentPointer = currentDirectory.currentPointer;
        
        if (currentPointer.verifyFile(file_name))
        {
            var absolute_path = currentDirectory.generatePointerPath() + file_name + "/";
            this.state.repo.stage_element(absolute_path);
        }
        
        return;
    },
    createGitRepository: function()
    {
        var newRepository = new gitrepository.GitRepository();
        this.setState({repo: newRepository});
    },
    
    traverseBack: function()
    {
        var currentDirectory = this.state.directory;
        currentDirectory.traverseBackwards();
        this.setState({directory:currentDirectory});
    },
    createFile: function(file_name)
    {
        var currentDirectory = this.state.directory;
        currentDirectory.createFile(file_name);
        this.setState({directory:currentDirectory});
    },
    makeDirectory: function(directory_name)
    {
        var currentDirectory = this.state.directory;
        currentDirectory.createFolder(directory_name);
        this.setState({directory: currentDirectory});
    },
    
    changeDirectory: function(directory_name)
    {
        var currentDirectory = this.state.directory;
        currentDirectory.traverseToChild(directory_name);
        this.setState({directory: currentDirectory});
    },
    
    
    componentDidMount: function()
    {
        var jqconsole = $('#console').jqconsole('Hi\n', '>>>');
        var startPrompt = function () {
          // Start the prompt with history enabled.
          jqconsole.Prompt(true, function (input) {
              
            // Output input with the class jqconsole-output.
            jqconsole.Write(input + '\n', 'jqconsole-output');
            jqconsole.Write(this.parseCommand(input) + "\n", 'jqconsole-output');
            // Restart the prompt.
            startPrompt();
          }.bind(this));
        }.bind(this);
        startPrompt();
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

        return {directory: directobject, increment: 1};
    },
    createNode: function()
    {
      var currentDirectory = this.state.directory;
      var id = this.state.increment + 1
      currentDirectory.createFolder("yes"+id);
      this.setState({directory:currentDirectory, increment: id})

    },
    render : function()
    {
        return (
            <div>
                <Visualization directory={this.state.directory.root} currentPointer={this.state.directory.currentPointer.directory_name}/>
                <button onClick={this.createNode}>Hey</button>
                <div id="console"></div>
            </div>
            )
    
    }
})

ReactDOM.render(<App />, document.getElementById('app'))

