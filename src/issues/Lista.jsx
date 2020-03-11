import React from 'react';

function Lista(props){
    console.log(props)

    return(
        <div>
            <h1>Titulo: {props.data.titulo}</h1>
        </div>
    )
}

export default Lista;