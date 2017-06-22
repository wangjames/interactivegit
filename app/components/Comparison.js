import TextDescription from "./TextDescription.js";
import ComparisonText from "../textsections/comparison_text.js";
import React from "react";
import Navbar from "../Navbar";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
class Comparison extends React.Component {
    render () {
        return (<div>
            <Navbar />
            <TextDescription textArray={ComparisonText} />
            </div>
            )
            
    }
}

export default Comparison;