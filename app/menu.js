import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';

class Index extends React.Component {
    render () {
        return (
            <Link to="/simulation">
            Hey
            </Link>
            )
    }
}
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/simulation" component={App} />
            <Route path="/" component={Index} />
        </Switch>
    </BrowserRouter>, document.querySelector("#app"))
