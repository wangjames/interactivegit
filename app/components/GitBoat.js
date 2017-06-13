import React from "react";
import Login from "./Login.js"
import MainPage from "./MainPage.js"
import CreateRepository from "./CreateRepository";
import RepositoryMain from "./RepositoryMain";
import ListCommit from "./ListCommit";
class GitBoat extends React.Component {
  constructor(props)
  {
    super(props)
    this.state =
    {
      status: "login",
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
    console.log("broken here");
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
    console.log("all the way up here");
    var gitRepo = this.state.gitBoat.getRepository(name);
    var master_branch = gitRepo.getBranch("master");
    this.setState({status: "single_commit", currentCommit: master_branch[(master_branch.length - 1)], currentBranch: master_branch, currentRepository: gitRepo, currentRepositoryName: name});
  }
  commitList()
  {
    this.setState({status: "list_commit"});
  }
  goBack()
  {
    this.setState({status: "single_commit"});
  }
  toggleCommit(index)
  {
    this.setState({currentCommit: this.state.currentBranch[index]});
  }
  render()
  {
    if (this.state.status === "login")
    {
      return <Login loginHandler={this.login}/>
    }
    
    else if (this.state.status === "create_repository")
    {
      return <CreateRepository handleChange={this.handleChange} submit_repository={this.submit_repository}/>
    }
    
    else if (this.state.status === "main_page")
    {
      console.log(this.state.gitBoat);
      var repository_list = this.state.gitBoat.exportRepositories();
      return <MainPage repository_list={repository_list} openRepository={this.openRepository} create_repository={this.create_repository} />
    }
    else if (this.state.status === "single_commit")
    {
      return <RepositoryMain commit={this.state.currentCommit} repository_name={this.state.currentRepositoryName} />
    }
    
    else if (this.state.status === "list_commit")
    {
      return <ListCommit branch={this.state.currentBranch} toggleCommit={this.toggleCommit} goBack={this.goBack} />
    }
  
  }
} 

export default GitBoat;