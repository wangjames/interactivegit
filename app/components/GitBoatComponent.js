import React from "react";
import Login from "./Login.js"
import MainPage from "./MainPage.js"
import CreateRepository from "./CreateRepository";
import RepositoryMain from "./RepositoryMain";
import ListCommit from "./ListCommit";
import NoBranchPage from "./NoBranchPage";
class GitBoatComponent extends React.Component {
  constructor(props)
  {
    super(props)
    this.state =
    {
      status: "main_page",
      gitBoat: props.gitBoat
    }
    this.login = this.login.bind(this);
    this.create_repository = this.create_repository.bind(this);
    this.submit_repository = this.submit_repository.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openRepository = this.openRepository.bind(this);
    this.commitList = this.commitList.bind(this);
    this.goBack = this.goBack.bind(this);
    this.toggleCommit = this.toggleCommit.bind(this);
    this.goToList = this.goToList.bind(this);
    this.goToMainPage = this.goToMainPage.bind(this);
  }
  
  login()
  {
    this.setState({status: "main_page"});
  }
  
  create_repository()
  {
    this.setState({status: "create_repository"})
  }
  submit_repository()
  {
    var copy_gitBoat = this.state.gitBoat;
    copy_gitBoat.create_repository(this.state.new_repository_value);
    this.setState({status: "main_page", gitBoat: copy_gitBoat, new_repository_value: ""});
  }
  handleChange(event)
  {
    this.setState({new_repository_value: event.target.value});
  }
  openRepository(name)
  {
    var gitRepo = this.state.gitBoat.getRepository(name);
    var gitUrl = this.state.gitBoat.getUrl(name);
    var branchStatus = gitRepo.containBranch("master");
    if (!branchStatus)
    {
      this.setState({status: "no_branch", currentRepository:gitRepo, currentRepositoryName: name, urlName: gitUrl});
    }
    else
    {
      var master_branch = gitRepo.getBranch("master");
      var headCommit = master_branch.returnHead();
      this.setState({status: "single_commit", currentCommit: headCommit, urlName: gitUrl, currentBranch: master_branch, currentRepository: gitRepo, currentRepositoryName: name});
    }
  }
  commitList()
  {
    this.setState({status: "list_commit"});
  }
  goBack()
  {
    this.setState({status: "single_commit"});
  }
  goToMainPage()
  {
    this.setState({status: "main_page"});
  }
  toggleCommit(index)
  {
    let selected_commit = this.state.currentBranch.selectCommit(index);
    this.setState({status: "single_commit", currentCommit: selected_commit});
  }
  goToList()
  {
    console.log("list change");
    this.setState({status: "list_commit"});
  }
  render()
  {
    
    if (this.state.status === "no_branch")
    {
      return <NoBranchPage url={this.state.urlName} repository_name={this.state.currentRepositoryName} changeToTerminal={this.props.changeToTerminal} goToMain={this.goToMainPage} />
    }
    else if (this.state.status === "create_repository")
    {
      return <CreateRepository handleChange={this.handleChange} goToMain={this.goToMainPage} submit_repository={this.submit_repository} returnTerminal={this.props.changeToTerminal}/>
    }
    
    else if (this.state.status === "main_page")
    {
      var repository_list = this.state.gitBoat.exportRepositories();
      return <MainPage  repository_list={repository_list} openRepository={this.openRepository} create_repository={this.create_repository} returnTerminal={this.props.changeToTerminal} />
    }
    else if (this.state.status === "single_commit")
    {
      return <RepositoryMain url={this.state.urlName} repository_name={this.state.currentRepositoryName} returnTerminal={this.props.changeToTerminal} goToMain={this.goToMainPage} changeToListCommit={this.goToList} commit={this.state.currentCommit} goBack={this.goBack} repository_name={this.state.currentRepositoryName} />
    }
    
    else if (this.state.status === "list_commit")
    {
      return <ListCommit branch={this.state.currentBranch} toggleCommit={this.toggleCommit} goBack={this.goBack} returnTerminal={this.props.changeToTerminal} />
    }
  
  }
} 

export default GitBoatComponent;