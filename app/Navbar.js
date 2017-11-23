import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Navbar extends React.Component
{
    render()
    {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/">
                        Interactive Git
              </Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Menu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/comparison">
                        Comparison
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                        About
                    </Link>
                  </li>
                  
                </ul>
              </div>
          </nav>
            )
    }
}

export default Navbar