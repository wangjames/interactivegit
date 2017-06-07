class CreateRepository extends React.Component{
    render()
    {
        return (<div>
            <input type="text" onChange={this.handleChange} />
            <button onClick={this.submit}> Submit </button>
            </div>)
    }
}