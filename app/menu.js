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
        let content = ["Crafting Email -> Making a Commit", "Send Email -> Pushing to Repository", "Recieving Email -> Pulling from repository"];
        return (<div>
                <Link to="/simulation">
                Simulation
                </Link>
                <Link to="/comparison">
                Comparison
                </Link>
                <Link to="/about">
                About
                </Link>
                <div className="container">
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
