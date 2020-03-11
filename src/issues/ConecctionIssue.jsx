import React from 'react';

export default class ConnectionIssue extends React.Component {


    componentDidMount() {
        this.conectarIssueResource();
    }
    
    constructor(props){
        super(props);

        this.state = {
            datos: {}
        };
    }
    

    conectarIssueResource(){
        let url = 'http://beta-api.sitrack.io/edna/Issue';
        let key = 'basic Z3VpbGhlcm1lLmJldGE6YmV0YQ==';
        
        fetch(url, {
            headers: {
                'content-type': 'application/json',
                Authorization: key,
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((messages) => { 
                console.log(messages); 
            });
        
        
        
    }

    render() {

        return (
            <div>
                
            </div>
        );
    }
}