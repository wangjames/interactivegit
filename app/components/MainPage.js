class MainPage extends React.Component{
    render()
    {
        return (<div> 
                This is the main_page
                <button onClick={this.props.create_repository}> Create </button>
                {this.props.repository.map(function(element){
                
                    return <div onClick={this.openRepository(index)}> Go to Repository </div>
                })}
                </div>)
    }
}

export default MainPage;