import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import SimulationContainer from './SimulationContainer.js';
import MenuItems from './textsections/menu_items.js';
import MenuItem from "./components/MenuItem.js";
import About from "./components/About.js";
import Comparison from "./components/Comparison.js";
import LinkItem from "./LinkItem"
import Navbar from "./Navbar"
class Index extends React.Component {
    constructor(props)
    {
        super(props);
        this.goToLink = this.goToLink.bind(this);
    }
    goToLink(index)
    {
        let link = "/simulation/" + index;
        this.props.history.push(link);
    }
    render () {
        let content = [["Emails to Commits", [`When coordinating with people on your team with email, 
        you can send them email messages, and when you want to share files, you can attach these files to the email.`,
        `With Git, this process is done through commits and preparing files to be sent by adding them to the staging area`
        ,`This tutorial will show you the workflow for doing this.`]], ["Sending to Pushing", 
        [`With email, after you finish prepare a message with its attachments, you send it to your collaboraters. With Git, after you make a commit of your work,
        you push your work up to a shared repository with your collaborators.`, `From this, all your collaborators can see the work that you have shared.`, `This tutorial works through that process of sending your work to a repository.`]],
        ["Recieving to Pulling", [`When working with people through email, you simply recieve emails from your teammates and you inspect the files that they gave you.
        With Git, the way you can do this is through pulling the most up to date version of your project from the public Git repository.`, `This tutorial works through that process.`]]]
        return (<div>
                <Navbar />
                <div className="container">
                    <div className="row" id="card-row">
                        {content.map(function(element, index)
                        {
                            return <LinkItem key={index} goToLink={this.goToLink} content={element} index={index} />
                        }.bind(this))}

                    </div>
                </div>
            </div>
            )
    }
}
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/comparison" component={Comparison} />
            <Route path="/about" component={About} />
            <Route path="/simulation/:index" component={SimulationContainer} />
            <Route path="/" component={Index} />
        </Switch>
    </BrowserRouter>, document.querySelector("#app"))
