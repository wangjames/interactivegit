import React from "react";
class Login extends React.Component
{
    
    render()
    {
        return (<div>
            This is the Login Page
            <button onClick={this.props.loginHandler}> Login </button>
        </div>)
    }
}

export default Login;