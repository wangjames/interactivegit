import React from "react";

class PromptContainer extends React.Component {
    constructor(props) {
    super(props);
    var currentSelection = 0;
    this.state = {
     prompts : props.prompts,
     currentNumber : currentSelection,
     currentPrompt : props.prompts[currentSelection]
    };
    this.changeAnswer = this.changeAnswer.bind(this);
    this.goBack = this.goBack.bind(this);
    }
    constructorWillMount ()
    {
        if (this.processPrompt(this.state.currentPrompt) === "next")
        {
            this.changeAnswer();
        }
    }
    
    processPrompt()
    {
        
        if (typeof this.state.currentPrompt === "object")
        {
            if (this.state.currentPrompt[0] === "executed")
            {
                return "stay";
            }
            this.state.currentPrompt[0] = "executed";
            this.props.execute(this.state.currentPrompt[0]);
            this.changeAnswer();
            return "next";
        }
        return "stay";
    }
    changeAnswer ()
    {
        var nextSelection = this.state.currentNumber + 1;
        var prospective_prompt = this.state.prompts[nextSelection];
        if (this.processPrompt(prospective_prompt) === "next")
        {
            this.setState({currentNumber: nextSelection});
            this.changeAnswer();
        }
        else
        {
            this.setState({
                currentNumber : nextSelection,
                currentPrompt : this.state.prompts[nextSelection]
            })
        }
        
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