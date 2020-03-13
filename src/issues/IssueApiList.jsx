import React from 'react';
import axios from 'axios';
import ListaApi from './ListaApi';
import moment from 'moment';

const apiKey = "basic Z3VpbGhlcm1lLmJldGE6YmV0YQ==";
const apiUrl = `http://beta-api.sitrack.io/edna/Issue`;
const headers = {
    'content-type': 'application/json',
    'Authorization': apiKey,
    'Accept': 'application/json'
}

export function cargarIssues() {
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

export function axiosGetById(id) {
    return fetch(apiUrl + "/" + id, {
        headers: headers
    })
        .then(res => res.json())
        .then(res => {
            const issue = res;
            return issue;
        });
}

export function axiosChangeState(id, estado){
    let issue = axiosGetById(id).then(issue =>{

        axios.put(apiUrl + "/" + id, {
            titulo: issue.titulo,
            contenido: issue.contenido,
            estado: estado,
            usuario: issue.usuario,
            fecha: issue.fecha = issue.fecha,
            modificado: moment().unix()
    
        }, {headers: headers})
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }) ;
    //Último cambio

    
}

export function axiosPOST(issue) {
    axios.post(apiUrl, {
        titulo: issue.titulo,
        contenido: issue.contenido,
        estado: "open",
        usuario: issue.usuario,
        fecha: issue.fecha = moment().unix(),
        modificado: null

    }, { headers: headers })
        .then(response => {
            console.log("Respuesta del servidor");
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}

class IssueApiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        axiosGET();
        //this.axiosPOST(); Se va a hacer un post si descomento esto
    }



    componentDidMount() {
        cargarIssues().then(data => {
            this.setState({
                data: data
            });
        });
    }



    render() {
        return (
            <div>
                <ListaApi data={this.state.data} />
            </div>
        )
    }

}

export default IssueApiList;