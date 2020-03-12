import React from 'react';
import Lista from './Lista';

class IssueApiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.cargarIssues().then(data => {
            this.setState({
                data: data
            });
        });
    }

    cargarIssues() {
        const apiKey = "basic Z3VpbGhlcm1lLmJldGE6YmV0YQ==";
        const apiUrl = `http://beta-api.sitrack.io/edna/Issue`;

        return fetch(apiUrl, {
            headers: {
                'content-type': 'application/json',
                Authorization: apiKey,
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                const data = [];
                console.log(res);
                console.log(res.length);

                for (var i = 0; i < res.length; i++) {
                    const issue = res[i];
                    const datos = {};
                    // llenar el objeto datos con los items del issue

                    datos.fecha = issue.fecha;
                    datos.contenido = issue.contenido;
                    datos.estado = issue.estado;
                    datos.titulo = issue.titulo;
                    datos.modificado = issue.modificado;
                    datos.usuario = issue.usuario;

                    data.push(datos);
                }
                console.log(data);

                return data;
            });
    }

    render() {
        return (
            <div>
                <Lista data={this.state.data} />
            </div>
        )
    }

}

export default IssueApiList;