import React from "react";

class PromptContainer extends React.Component {
    constructor(props) {
        super(props);
        var currentSelection = 0;
        var events = [];
        for (var i = 0; i < this.props.count; i++)
        {
            events.push(false);
        }
        this.state = {
         currentNumber : currentSelection,
         evaluated_events: events
        };
        this.goBack = this.goBack.bind(this);
        this.changeAnswer = this.changeAnswer.bind(this);
        
    }
    componentWillMount()
    {
        this.props.checkEvent(this.state.currentNumber);
    }
    goBack()
    {
        let newSelection = this.state.currentNumber - 1;
        if (newSelection < 0)
        {
            return;
        }
        let event_array = this.state.evaluated_events;
        if (event_array[newSelection] === false)
        {
            this.props.checkEvent(newSelection);
            event_array[newSelection] = true;
        }
        this.props.goBack();
        this.setState({currentNumber: newSelection, evaluated_events:event_array})
    }
    
    changeAnswer()
    {
        
        let newSelection = this.state.currentNumber + 1;
        if (newSelection >= this.props.count)
        {
            return;
        }
        let event_array = this.state.evaluated_events;
        if (event_array[newSelection] === false)
        {
            this.props.checkEvent(newSelection);
            event_array[newSelection] = true;
        }
        this.props.changeAnswer();
        this.setState({currentNumber: newSelection, evaluated_events:event_array})
    }
    render () {
        if (this.props.currentSection == 1){
            return (
                 <div>
                    {this.props.prompt.map(function(element, index)
                    {
                        return <p key={index}> {element} </p>
                    })}
                    
                    <button id="back-button" onClick={this.goBack}>Back</button>
                    <button id="next-button" onClick={this.changeAnswer}>Next</button>
                </div>
                )
        }
        return (
        
        <div>
            {this.props.prompt.map(function(element, index)
            {
                return <p key={index}> {element} </p>
            })}
            
            <button id="back-button" onClick={this.goBack}>Back</button>
            <button id="next-button" onClick={this.changeAnswer}>Next</button>
            <button id="gitboat-button" onClick={this.props.gitBoat}> GitBoat </button>
        </div>
       
            );
    }
};

module.exports = PromptContainer;