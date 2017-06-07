import React from "react";

class GitBoat extends React.Component {
  constructor(props)
  {
    super(props)
    this.state =
    {
      status: "login",
      gitBoat: props.gitBoat
    }
  }
  
  login()
  {
    this.setState({status: "main_page"});
  }
  
  create_repository()
  {
    this.setState({status: "create_repository"})
  }
  submit_repository(name)
  {
    this.state.gitBoat.create_repository(this.state.new_repository_value);
    this.setState({status: "main_page", gitBoat: this.state.gitBoat, new_repository_value: ""});
  }
  handleChange(event)
  {
    this.setState({new_repository_value: event.target.value});
  }
  openRepository(name)
  {
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
      return <MainPage repository_list={this.state.gitBoat.exportRepositories} openRepository={this.openRepository} create_repository={this.create_repository} />
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