import React from "react";
import Simulation from "./Simulation";
import LessonArray from "./textsections/LessonArray.js";
import LessonThreeEvents from "./modules/LessonThreeEvents";
import Navbar from "./Navbar"
class SimulationContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.index = this.props.match.params.index;
        this.prompt_array = LessonArray[this.index];
        this.prompt_index = 0;
        if (this.index === "2")
        {
            this.execution_events = LessonThreeEvents;
        }
        
        else
        {
            this.execution_events = [[]];
        }
        
        this.state = {
            prompts: this.prompt_array,
            prompt_index: this.prompt_index,
            current_prompt: this.prompt_array[this.prompt_index],
            prompt_length: this.prompt_array.length
        }
        this.changeAnswer = this.changeAnswer.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    
    changeAnswer ()
    {
        var nextSelection = this.state.prompt_index + 1;
        if (nextSelection >= this.prompt_length)
        {
            return;
        }
        this.setState({prompt_index: nextSelection, current_prompt: this.state.prompts[nextSelection]});
    }
    goBack ()
    {
        var backSelection = this.state.prompt_index - 1;
        if (backSelection < 0)
        {
            return;
        }

        this.setState({
            prompt_index : backSelection,
            current_prompt : this.state.prompts[backSelection]
        })
    }
    render()
    {
        return (
            <div>
                <Navbar />
                <Simulation changeAnswer={this.changeAnswer} goBack={this.goBack}
                prompt_count={this.state.prompt_length} prompt_index={this.state.prompt_index}
                current_prompt={this.state.current_prompt} execution={this.execution_events}/>
            </div>
        )
    }
    
}

export default SimulationContainer;