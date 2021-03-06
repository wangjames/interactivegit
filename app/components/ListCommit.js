import React from "react";
import IndividualCommit from "./IndividualCommit";
class ListCommit extends React.Component{
    render()
    {
        let branch_messages = this.props.branch.returnMessages();
        return (<div id="main-page-container">
                    <button onClick={this.props.goBack}> Go Back </button>
                    {this.props.branch.commits.map(function(element, index)
                    {
                        return <IndividualCommit key={index}index={index} toggleCommit={this.props.toggleCommit} message={branch_messages[index]}/>
                    }.bind(this))}
                </div>
                )
    }
}

export default ListCommit;