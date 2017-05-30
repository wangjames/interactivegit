import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';
import MenuItems from './menu_items.js';
import MenuItem from "./MenuItem.js";
import About from "./About.js";
import Comparison from "./Comparison.js";

class Index extends React.Component {
    render () {
        return (<div>
                { 
                    MenuItems.map(function(element, index){
                    return <MenuItem key={index} summary={element[0]} paragraph={element[1]}/>
                    })
                    
                }
                <Link to="/simulation">
                Simulation
                </Link>
                <Link to="/comparison">
                Comparison
                </Link>
                <Link to="/about">
                About
                </Link>
            </div>
            )
    }
}
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/comparison" component={Comparison} />
            <Route path="/about" component={About} />
            <Route path="/simulation" component={App} />
            <Route path="/" component={Index} />
        </Switch>
    </BrowserRouter>, document.querySelector("#app"))
