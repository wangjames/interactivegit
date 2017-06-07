import React from "react";

class GitBoat extends React.Component {
  constructor(props)
  {
    super(props)
    this.state =
    {
      status: "login"
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
  main_page()
  {
    this.setState({status: "main_page"});
  }
  openRepository(name)
  {
    var branch = this.getBranch(name);
    this.setState({status: "single_commit", currentCommit: branch});
  }
  commitList()
  {
    this.setState({status: "list_commit"});
  }
  goBack()
  {
    this.setState({status: "single_commit"});
  }
  render()
  {
    if (this.state.status === "login")
    {
      return <Login loginHandler={this.login}/>
    }
    
    else if (this.state.status === "create_repository")
    {
      return <CreateRepository register={this.register}/>
    }
    
    else if (this.state.status === "main_page")
    {
      return <MainPage />
    }
    else if (this.state.status === "single_commit")
    {
      return <RepositoryMain commit={this.state.currentCommit} />
    }
    
    else if (this.state.status === "list_commit")
    {
      return <ListCommit branch={this.state.branch} />
    }
  
  }
}