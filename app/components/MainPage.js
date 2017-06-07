class MainPage extends React.Component{
    render()
    {
        return (<div> 
                This is the main_page
                <button onClick={this.props.create_repository}> Create Repository</button>
                {this.props.repository_list.map(function(element){
                
                    return <div onClick={this.props.openRepository(element)}>Repository : {element} </div>
                })}
                </div>)
    }
}

export default MainPage;