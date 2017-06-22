import TextDescription from "./TextDescription.js";
import AboutText from "../textsections/about_text.js";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React from "react";
import Navbar from "../Navbar";
class About extends React.Component {
    render () {
        return (<div>
            <Navbar />
            <TextDescription textArray={AboutText} />
            </div>
            )
            
    }
}

export default About;