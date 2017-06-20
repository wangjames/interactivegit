import React from "react";
import Simulation from "./Simulation";
import LessonArray from "./textsections/LessonArray.js";
class SimulationContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.index = props.match.params.index;
        this.prompt_array = LessonArray;
        console.log(this.index);
    }
    render()
    {
        return <Simulation prompts={this.prompt_array[this.index]}/>
    }
    
}

export default SimulationContainer;