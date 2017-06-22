import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import SimulationContainer from './SimulationContainer.js';
import MenuItems from './textsections/menu_items.js';
import MenuItem from "./components/MenuItem.js";
import About from "./components/About.js";
import Comparison from "./components/Comparison.js";
import LinkItem from "./LinkItem"
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
        let content = [["Crafting Email -> Making a Commit", `When sending email for the first time, you need to set up your email account with an email provider like Gmail or Yahoo! Mail.
        Similarily, in order to use git, you need to do some local setup and signup with a public Git repository host like Github or Bitbucket.
        Also, when coordinating with people on your team with email,
        you can send them email messages with your work for them to see and work with. Before you send an email though, you first have to prepare the message and all of its attachments.
        With Git, this process is done through commits. This tutorial will show you the workflow for doing this.`
        ], ["Send Email -> Pushing to Repository", `With email, after you finish writing it and attaching files, you send it to your collaboraters. With Git, after you make a commit of your work,
        you push your work up to a shared repository with your collaborators. From this, people can see the work that you have shared. This tutorial works through that process.`],
        ["Recieving Email -> Pulling from repository", `When working with people through email, you simply recieve emails from your teammates and you inspect the files that they gave you.
        With Git, the way you can do this is through pulling the most up to date changes from the public Git repository. This tutorial works through that process.`]];
        return (<div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 offset-md-5">
                            <h1> Tutorials </h1>
                        </div>
                    </div>
                    <div className="row">
                        {content.map(function(element, index)
                        {
                            return <LinkItem goToLink={this.goToLink} content={element} index={index} />
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
