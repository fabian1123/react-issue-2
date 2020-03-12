import React from 'react';

class DetalleApi extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.match.params.issueId
        }
    }

    componentDidMount(){
        this.cargarIssue();
    }

    cargarIssue(){
        const id = Number(this.props.match.params.issueId);
        console.log("ID: "+id);
        
    }

    render(){
        return(
        <h1>DetalleApi</h1>
        )
    }
}

export default DetalleApi;