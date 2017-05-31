import TextDescription from "./TextDescription.js";
import ComparisonText from "../textsections/comparison_text.js";
import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
class Comparison extends React.Component {
    render () {
        return (<div>
            <TextDescription textArray={ComparisonText} />
            <Link to="/">
                Back
            </Link>
            </div>
            )
            
    }
}

export default Comparison;