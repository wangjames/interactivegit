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
    componentWillMount()
    {
        this.props.checkEvent(this.state.currentNumber);
    }
    changeAnswer ()
    {
        var nextSelection = this.state.currentNumber + 1;
        this.props.checkEvent(nextSelection);
        this.setState({currentNumber: nextSelection, currentPrompt: this.state.prompts[nextSelection]});
    }
    goBack ()
    {
        var backSelection = this.state.currentNumber - 1;
        this.props.checkEvent(backSelection);
        this.setState({
            currentNumber : backSelection,
            currentPrompt : this.state.prompts[backSelection]
        })
    }
    render () {
        return (
        
        <div>
            <p> {this.state.currentPrompt} </p>
            <button onClick={this.changeAnswer}>Next</button>
            <button onClick={this.goBack}>Back</button>
        </div>
       
            );
    }
};

module.exports = PromptContainer;