const apiKey = "basic Z3VpbGhlcm1lLmJldGE6YmV0YQ==";
const apiUrl = `http://beta-api.sitrack.io/edna/Issue`;

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
                // llenar el objeto d con dia, max, min e icono

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


/*import React from 'react';

 "fecha": 1579263883,
        "contenido": "Test ABM de productos",
        "estado": "opened",
        "titulo": "ABM",
        "modificado": 1579587883,
        "usuario"

import IssueApiList from './IssueApiList';

export default class ConnectionIssue extends React.Component {

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
                //

                console.log(messages);
                console.log(messages[0].contenido);

                return messages;
            });
    }

    render() {

        return (
            <div>
                <IssueApiList datos={this.state.datos}/>
            </div>
        );
    }
}*/