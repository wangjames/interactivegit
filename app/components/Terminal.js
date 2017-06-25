import React from "react";

class Terminal extends React.Component
{
    
    
    componentDidMount()
    {
        
        var jqconsole = $('#console').jqconsole("",'>>>');
        console.log("yup");
        this.props.commands.forEach(function(element)
        {
            jqconsole.Write(element + "\n", 'jqconsole-output');
        });
        var startPrompt = function () {
          // Start the prompt with history enabled.
          jqconsole.Prompt(true, function (input) {
              
            // Output input with the class jqconsole-output.
            jqconsole.Write(input + '\n', 'jqconsole-output');
            jqconsole.Write(this.props.parseCommand(input) + "\n", 'jqconsole-output');
            // Restart the prompt.
            startPrompt();
          }.bind(this));
        }.bind(this);
        startPrompt();
    }
    render()
    {
        return <div id="console"></div>
    }
}

export default Terminal;