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
    this.goBack = this.goBack.bind(this);
  }
    
    changeAnswer ()
    {
        var nextSelection = this.state.currentNumber + 1;
        this.setState({
            currentNumber : nextSelection,
            currentPrompt : this.state.prompts[nextSelection]
        })
    }
    goBack ()
    {
        var backSelection = this.state.currentNumber - 1;
        this.setState({
            currentNumber : backSelection,
            currentPrompt : this.state.prompts[backSelection]
        })
    }
    render () {
        return (
        <div>
        <div id="promptcontainer">
            <p> {this.state.currentPrompt} </p>
            <button onClick={this.changeAnswer}>Next</button>
            <button onClick={this.goBack}>Back</button>
        </div>
       
        </div>
            );
    }
};

module.exports = PromptContainer;