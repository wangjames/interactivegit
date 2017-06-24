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

var Simulation = React.createClass({
    
    parseCommand: function(input)
    {
        this.state.command_array.push(input);
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
                if (this.state.directory.showCurrentPointer() !== "/root")
                {
                    return "Please initialize git repository from root directory for this tutorial.";
                }
                this.createGitRepository();
                return "Git Repository Initialized";
            }
            
            else if (command_split[1] === "clone")
                {
                    this.cloneBranch(command_split[2])
                    return "Branch cloned";
                }
            if (this.state.hasOwnProperty("repo"))
            {
                if (command_split[1] === "add")
                {
                    this.addToStagingArea(command_split[2]);
                    return "File added to Staging Area";
                }
                else if (command_split[1] === "remote")
                {
                    if (command_split.length !== 5)
                    {
                        return "Incorrect syntax";
                    }
                    else
                    {
                    this.addRemote(command_split[3], command_split[4]);
                    return "remote added";
                    }
                }
              
                else if (command_split[1] === "commit")
                {
                    var expression_1 = "/^\-m$/gi"
                    var expression_2 = "/^\".+\"$/"
                    
                    if (command_split[2].match(expression1) !== null && input.match(expression2) !== null)
                    {
                        let message = input.match(/\".+\"/g)
                        
                        message = message[0].match(/\w+\s*\w*/g)
                        this.makeCommit(message);
                        return "Commit Made"
                    }
                }
                else if (command_split[1] === "log")
                {
                    return this.state.repo.returnLog();
                }
                else if (command_split[1] === "push")
                {
                    this.pushBranch(command_split[2], command_split[3]);
                    return "Branch Pushed";
                }
                else if (command_split[1] === "pull")
                {
                    this.pullBranch();
                    return "Branch pulled";
                }
                
                
                else if (command_split[1] === "merge")
                {
                    this.mergeBranches();
                }
                
                else if (command_split[1] === "status")
                {
                    return this.checkStatus();
                }
                
                else if (command_split[1] === "reset")
                {
                    var expression1 = /^HEAD\~[0-9]+$/gi;
                    var expression2 = /^\-{2}hard$/gi;
                    var expression3 = /^HEAD$/gi;
                    
                    if (command_split[2].match(expression3) !== null && command_split[3].match(expression2))
                    {
                        this.rollBack(0);
                    }
                    if (command_split[2].match(expression1) !== null && command_split[3].match(expression2))
                    {
                        var number_rollback = command_split[2].split('~')[1];
                        this.rollBack(number_rollback);
                    }
                    
                }
            }
            
            else
            {
                return "Must initialize git repository first.";
            }
        }
    },
    
    cloneBranch: function(url)
    {
       
        if (!(this.state.hasOwnProperty("repo")))
        {
            let exported_branch = this.state.gitBoat.exportBranch(url, "master");
            this.createGitRepository();
            let currentGitRepo = this.state.repo;
            currentGitRepo.replaceBranch("master", exported_branch);
            this.addRemote("origin", url);
            let currentCommit = exported_branch.returnHead();
            this.setState({repo: currentGitRepo, directory: currentCommit});
            
            return;
        }
        else
        {
            return;
        }
    },
    pullBranch: function()
    {
        if (this.state.hasOwnProperty("repo"))
        {
            let remote_url = this.state.repo.retrieveURL("origin");
            let exported_branch = this.state.gitBoat.exportBranch(remote_url, "master");
            let currentGitRepo = this.state.repo;
            currentGitRepo.replaceBranch("master", exported_branch);
            let currentCommit = exported_branch.returnHead();
            this.setState({gitRepo: currentGitRepo, directory: currentCommit});
            return;
        }
        else
        {
            return;
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
        this.setState({directory: newDirectory, repo: this.state.repo});
    },
    checkStatus: function()
    {
        var repository = this.state.repo;
        
        
        return this.state.repo.checkStatus();
    },
    
    addToStagingArea: function(file_name)
    {
        var currentDirectory = this.state.directory;
        var currentPointer = currentDirectory.currentPointer;
        if (file_name === ".")
        {
            var children_array = currentDirectory.generate_current_children();
            children_array.forEach(function(element)
            {
                var copied_object = currentDirectory.retrieveByPathName(element);
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
    makeCommit: function(message)
    {
        var repository = this.state.repo;
        repository.makeCommit(message);
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
        var new_path = currentDirectory.showCurrentPointer() + "/" + file_name;
        
        if (this.state.hasOwnProperty("repo"))
        {
            this.state.repo.track_changes(new_path);
            this.setState({directory:currentDirectory, repo: this.state.repo});
        }
       
        else
        {
            this.setState({directory:currentDirectory});
        }
        
    },
    makeDirectory: function(directory_name)
    {
        var currentDirectory = this.state.directory;
        currentDirectory.createFolder(directory_name);
        var new_path = currentDirectory.showCurrentPointer() + "/" + directory_name;
        
        if (this.state.hasOwnProperty("repo"))
        {
            this.state.repo.track_changes(new_path);
            this.setState({directory:currentDirectory, repo: this.state.repo});
        }
        else
        {
            this.setState({directory:currentDirectory});
        }

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
        var gitBoatInstance = new GitBoatModule();
        let command_array = [];
        return {prompt_count: 0, directory: directobject, increment: 1, gitBoat: gitBoatInstance, command_array: command_array, execution: this.props.execution};
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
        
        var file_contents = this.state.directory.retrieveByPathName(file_name).retrieveContents();
        this.setState({status: "editing", file: file_name, content: file_contents});
    },
    
    submitContent: function(file_name, content)
    {
        var directory = this.state.directory;
        directory.retrieveByPathName(file_name).modifyContents(content);
       
        if (this.state.hasOwnProperty("repo"))
        {
            this.state.repo.track_changes(file_name);
        }
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
    checkEvent : function(index)
    {
        if (index < 0 || index > this.state.execution.length)
        {
            return;
        }
        let commands = this.state.execution;
        var command_array = commands[index];
        if (command_array !== undefined)
        {
            let modifiedGitBoat = this.state.gitBoat;
            command_array.forEach(function(command, index)
            {
                if (command[0] === "push")
                {
                    modifiedGitBoat.pushBranch(command[1], "master", command[2]);
                }
            
                if (command[0] === "create")
                {
                    modifiedGitBoat.create_repository(command[1]);
                }
            })
            this.setState({gitBoat: modifiedGitBoat});
        }
        
        return;
    },
    render : function()
    {
        if (this.state.status === "editing")
        {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <Editor content={this.state.content} file={this.state.file} submit={this.submitContent} />
                        </div>
                    </div>
                </div>
                )
        }
        if (this.state.status === "gitboat")
        {
            
            return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div id="promptcontainer">
                        <PromptContainer goBack={this.props.goBack}
                                            changeAnswer={this.props.changeAnswer}
                                            index={this.props.prompt_index}
                                            count={this.props.prompt_count}
                                            gitBoat={this.gitBoat}
                                            prompt={this.props.current_prompt}
                                            checkEvent={this.checkEvent} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <GitBoatComponent gitBoat={this.state.gitBoat} changeToTerminal={this.changeToTerminal} />
                    </div>
                </div>
            </div>
                )
        }

        else
        {
            return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div id="promptcontainer">
                            <PromptContainer 
                                            goBack={this.props.goBack}
                                            changeAnswer={this.props.changeAnswer}
                                            index={this.props.prompt_index}
                                            count={this.props.prompt_count}
                                            gitBoat={this.gitBoat}
                                            prompt={this.props.current_prompt}
                                            checkEvent={this.checkEvent} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Terminal parseCommand={this.parseCommand}/>
                        </div>
                        
                        <div className="col-md-4">
                            <div id="visualization-container">
                                <div style={{"marginBottom": "10px"}}> Visualization of Filesystem </div>
                                <Visualization level={0} directory={this.state.directory.root} openEditing={this.openEditing} currentPointer={this.state.directory.currentPointer.directory_name}/>
                            </div>
                        </div>
                    </div>
                </div>
            
            )
        }
    
    }
})

export default Simulation;

