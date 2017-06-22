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
        this.index = props.match.params.index;
        this.prompt_array = LessonArray;
        if (this.index === "2")
        {
            this.execution_events = LessonThreeEvents;
        }
        
        else
        {
            this.execution_events = [[]];
        }
        console.log(this.prompt_array[this.index]);
        console.log("Here is the prompt_array");
    }
    
    render()
    {
        return (
            <div>
                <Navbar />
                <Simulation prompts={this.prompt_array[this.index]} execution={this.execution_events}/>
            </div>
        )
    }
    
}

export default SimulationContainer;