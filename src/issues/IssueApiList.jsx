import React from 'react';
import Lista from './ListaApi';
import axios from 'axios';

const apiKey = "basic Z3VpbGhlcm1lLmJldGE6YmV0YQ==";
const apiUrl = `http://beta-api.sitrack.io/edna/Issue`;
const headers = {
    'content-type': 'application/json',
    'Authorization': apiKey,
    'Accept': 'application/json'
}

export function axiosGET() {
    axios.get(apiUrl, {
        headers: headers
    })
        .then(response => {
            console.log("Dentro del then");
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}

export function axiosGetById(id){
        axios.get(apiUrl + "/" + id, {headers: headers})
        .then(response => {
            console.log("Dentro de axiosGetById");
            console.log(response.data);
            return response.data
        })
}

class IssueApiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        axiosGET();
        axiosGetById("2c4fd081-017f-4618-9d6f-2a65c2638630");
        //this.axiosPOST(); Se va a hacer un post si descomento esto
    }

    axiosPOST() {
        axios.post(apiUrl, {

            titulo: "Prueba Axios",
            contenido: "Post Desde axios",
            estado: "opened",
            usuario: "Fabian",
            fecha: 1579263883,
            modificado: 1579587883

        }, { headers: headers })
            .then(response => {
                console.log("Respuesta del servidor");
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.cargarIssues().then(data => {
            this.setState({
                data: data
            });
        });
    }

    cargarIssues() {
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
                    datos.id = issue.id;

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