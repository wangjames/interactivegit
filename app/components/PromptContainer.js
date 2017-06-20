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
        this.getNewIndexBackward = this.getNewIndexBackward.bind(this);
        this.getNewIndexForward = this.getNewIndexForward.bind(this);
    }
    componentWillMount ()
    {
        let index = 0;
        while (index < this.state.prompts.length)
        {
            let currentPrompt = this.state.prompts[index];
            if (typeof currentPrompt === "object")
            {
                this.props.execute(currentPrompt[0]);
                index += 1;
            }
            else
            {
                break;
            }
        }
        let new_prompts = this.state.prompts.splice(index);
        console.log(new_prompts);
        this.setState({prompts: new_prompts, currentPrompt: new_prompts[0]});
    }
    getNewIndexForward(index)
    {
        let pointer = index;
        while (pointer < this.state.prompts.length)
        {
            let currentPrompt = this.state.prompts[pointer];
            if (typeof currentPrompt === "object")
            {
                this.props.execute(currentPrompt[0]);
                pointer += 1;
            }
            else
            {
                break;
            }
        }
        return pointer;
    }
    getNewIndexBackward(index)
    {
        let pointer = index;
        while (pointer > -1)
        {
            let currentPrompt = this.state.prompts[pointer];
            if (typeof currentPrompt === "object")
            {
                this.props.execute(currentPrompt[0]);
                pointer -= 1;
            }
            else
            {
                break;
            }
        }
        return pointer;
    }
    changeAnswer ()
    {
        var nextSelection = this.state.currentNumber + 1;
      
        var newSelection = this.getNewIndexForward(nextSelection);
        this.setState({currentNumber: newSelection, currentPrompt: this.state.prompts[newSelection]});
    }
    goBack ()
    {
        var backSelection = this.state.currentNumber - 1;
        var newSelection = this.getNewIndexBackward(backSelection);
        this.setState({
            currentNumber : newSelection,
            currentPrompt : this.state.prompts[newSelection]
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