import React from "react";
import PromptArray from "../textsections/AllSections.js";
class PromptContainer extends React.Component {
    constructor(props) {
    super(props);
    var currentSelection = 0;
    this.state = {
     prompts : PromptArray,
     currentNumber : currentSelection,
     currentPrompt : PromptArray[currentSelection]
    };
    this.changeAnswer = this.changeAnswer.bind(this);
  }
    
    changeAnswer ()
    {
        var nextSelection = this.state.currentNumber + 1;
        this.setState({
            currentNumber : nextSelection,
            currentPrompt : this.state.prompts[nextSelection]
        })
    }
    render () {
        return (
        <div>
        <div id="promptcontainer">
            <p> {this.state.currentPrompt} </p>
            <button onClick={this.changeAnswer}>Next</button>
        </div>
       
        </div>
            );
    }
};

module.exports = PromptContainer;