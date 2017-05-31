import TextDescription from "./TextDescription.js";
import AboutText from "../textsections/about_text.js";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React from "react";
class About extends React.Component {
    render () {
        return (<div>
            <TextDescription textArray={AboutText} />
            <Link to="/">
                Back
            </Link>
            </div>
            )
            
    }
}

export default About;