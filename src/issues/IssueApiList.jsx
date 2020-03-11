import React from 'react';
import { cargarIssues } from './ConecctionIssue';
import Lista from './Lista';

class IssueApiList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        cargarIssues().then(data => {
            this.setState({
                data: data
            });
        });
    }

    render(){
        return(
            <div>
                 {this.state.data && this.state.data.map((d, index) => <Lista key={index} data={d} />)}
            </div>
        )
    }



}

export default IssueApiList;