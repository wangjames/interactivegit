import DirectoryObject from "./modules/Directory";
import JQConsole from "./modules/jqconsole";
import GitRepository from "./modules/GitRepository";
import React from "react";
import ReactDOM from "react-dom"
import Visualization from "./components/Visualization";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PromptContainer from "./components/PromptContainer";
import Editor from "./components/Editor";
import Terminal from "./components/Terminal";
import GitBoatModule from "./modules/GitBoatModule";
import GitBoatComponent from "./components/GitBoatComponent";
require("./index.css");

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
        
        else if (command_split[0] === "pwd")
        {
            return this.showCurrentPointer();
        }
        else if (command_split[0] === "ls")
        {
            return this.showChildren();
        }
        else if (command_split[0] === "git")
        {
            if (command_split[1] === "init")
            {
                this.createGitRepository();
                return "Git Repository Initialized";
            }
        
            else if (command_split[1] === "add")
            {
                this.addToStagingArea(command_split[2]);
                return "File added to Staging Area";
            }
            else if (command_split[1] === "remote")
            {
                this.addRemote(command_split[3], command_split[4]);
                return "remote added";
               
            }
          
            else if (command_split[1] === "commit")
            {
                this.makeCommit();
                return "Commit Made";
            }
            
            else if (command_split[1] === "push")
            {
                this.pushBranch(command_split[2], command_split[3]);
                return "Branch Pushed";
            }
            
            else if (command_split[1] === "merge")
            {
                this.mergeBranches();
            }
            
            else if (command_split[1] === "status")
            {
                this.checkStatus();
            }
            
            else if (command_split[1] === "reset")
            {
                var expression1 = /^HEAD\~[0-9]+$/gi;
                var expression2 = /^\-{2}hard$/gi;
                var expression3 = /^HEAD$/gi;
                
                if (command_split[2].match(expression3) !== null && command_split[3].match(expression2))
                {
                    console.log("activated");
                    this.rollBack(0);
                }
                if (command_split[2].match(expression1) !== null && command_split[3].match(expression2))
                {
                    console.log("here we go");
                    var number_rollback = command_split[2].split('~')[1];
                    this.rollBack(number_rollback);
                }
                
            }
        }
    },
    showChildren: function()
    {
        return this.state.directory.displayCurrentChildren();
    },
    showCurrentPointer: function()
    {
        return this.state.directory.showCurrentPointer();
    },
    rollBack: function(rollback_count)
    {
        this.state.repo.rollback(rollback_count);
        var newDirectory = this.state.repo.exportCommit();
        console.log(newDirectory);
        console.log("here is the newdirectory after rollback");
        console.log(newDirectory.generate_current_children());
        console.log(this.state.directory.generate_current_children());
        this.setState({directory: newDirectory, repo: this.state.repo});
    },
    checkStatus: function()
    {
        var repository = this.state.repo;
        var currentDirectory = this.state.currentDirectory;
        
        return this.state.repo.currentStatus(currentDirectory);
    },
    
    addToStagingArea: function(file_name)
    {
        var currentDirectory = this.state.directory;
        var currentPointer = currentDirectory.currentPointer;
        if (file_name === ".")
        {
            var children_array = currentDirectory.generate_current_children();
            console.log("after rollback");
            console.log(children_array);
            console.log(currentDirectory);
            children_array.forEach(function(element)
            {
                var copied_object = currentDirectory.retrieveByPathName(element);
                console.log("plz");
                console.log(copied_object);
                console.log(element);
                console.log(currentDirectory);
                this.state.repo.stage_element(element, copied_object);
            }, this);
        }
        else if (currentDirectory.verifyFile(file_name))
        {
            
            var absolute_path = currentDirectory.getPath() + "/" + file_name;
            var copied_object = currentDirectory.retrieveByPathName(absolute_path);
            this.state.repo.stage_element(absolute_path, copied_object);
        }
        return;
    },
    makeCommit: function()
    {
        var repository = this.state.repo;
        repository.makeCommit();
        return;
        
    },
    createGitRepository: function()
    {
        var newRepository = new GitRepository();
        newRepository.populate_pre_stage(this.state.directory);
        this.setState({repo: newRepository});
    },
    addRemote: function(name, url)
    {
        this.state.repo.addRemote(name, url);
    },
    pushBranch: function(remote_name, branch_name)
    {
        var pushed_branch = this.state.repo.exportBranch(branch_name);
        var repo_url = this.state.repo.retrieveURL(remote_name);
        console.log(this.state.gitBoat);
        console.log(repo_url);
        console.log("remote name");
        this.state.gitBoat.pushBranch(repo_url, branch_name, pushed_branch);
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
    
   
    getInitialState: function()
    {
        var directobject = new DirectoryObject();
        directobject.setPath("/root");
        directobject.createFolder("hi");
        directobject.createFolder("hey");
        directobject.traverseToChild("hey");
        directobject.createFolder("yes");
        directobject.traverseBackwards();
        directobject.traverseToChild('hi');
        directobject.createFolder("yoyoyo");
        directobject.traverseBackwards();
        var gitBoatInstance = new GitBoatModule();
      
        return {directory: directobject, increment: 1, gitBoat: gitBoatInstance};
    },
    createNode: function()
    {
      var currentDirectory = this.state.directory;
      var id = this.state.increment + 1
      currentDirectory.createFolder("yes"+id);
      this.setState({directory:currentDirectory, increment: id})

    },
    retrieveContents: function(file_name)
    {
        return this.state.directory.retrieveByPathName(file_name);
    },
    
    openEditing: function(file_name){
        console.log("checking editing");
        console.log(file_name);
        var file_contents = this.state.directory.retrieveByPathName(file_name).retrieveContents();
        console.log("should work");
        console.log(file_contents);
        this.setState({status: "editing", file: file_name, content: file_contents});
    },
    
    submitContent: function(file_name, content)
    {
        console.log(file_name);
        console.log(content);
        console.log("checking submit");
        var directory = this.state.directory;
        directory.retrieveByPathName(file_name).modifyContents(content);
       
        this.setState({directory: directory, status: "terminal"});
    },
    gitBoat: function()
    {
        this.setState({status: "gitboat"});
    },
    changeToTerminal: function()
    {
        this.setState({status: "terminal"});
    },
    render : function()
    {
        if (this.state.status === "editing")
        {
            return (
                <div> 
                    <Visualization directory={this.state.directory.root} currentPointer={this.state.directory.currentPointer.directory_name} />
                    <Editor content={this.state.content} file={this.state.file} submit={this.submitContent} />
                </div>
                )
        }
        if (this.state.status === "gitboat")
        {
            return (
                <div id="gitboat-container">
                <GitBoat gitBoat={this.state.gitBoat} changeToTerminal={this.changeToTerminal} />
                </div>
                )
        }
        
        else
        {
            return (
            <div>
                <Visualization directory={this.state.directory.root} openEditing={this.openEditing} currentPointer={this.state.directory.currentPointer.directory_name}/>
                <button onClick={this.createNode}>Hey</button>
                <button onClick={this.gitBoat}>Change to gitBoat</button>
                <Link id="link" to="/">
                Back
                </Link>
                <div id="container">
                    <PromptContainer />
                    <Terminal parseCommand={this.parseCommand}/>
                </div>
                
            </div>
            )
        }
    
    }
})

export default App;

