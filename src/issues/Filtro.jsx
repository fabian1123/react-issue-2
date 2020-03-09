import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

//Recibo de App.js el texto y el manejador del evento
function Filtro(props) {
    return (
        <Form.Group as={Row}>
            <Form.Label column sm="2">Filtro</Form.Label>
            <Col sm="8">
                <Form.Control name="filtro" value={props.filtro} onChange={props.onFiltroChanged}/>
            </Col>
            <Col>
                <Link to={`${props.match.url}/new`}>
                    <Button variant="success">Nuevo</Button>
                </Link>
            </Col>
        </Form.Group>
    );
}

export default withRouter(Filtro);