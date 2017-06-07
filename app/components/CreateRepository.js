class CreateRepository extends React.Component{
    render()
    {
        return (<div>
            <input type="text" onChange={this.handleChange} />
            <button onClick={this.props.main_page}> Submit </button>
            </div>)
    }
}