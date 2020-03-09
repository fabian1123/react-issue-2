import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Recibo de App.js el texto y el manejador del evento
function Filtro({texto, handleChange}) {
    return (
        <Form.Group as={Row}>
            <Form.Label column sm="2">Filtro</Form.Label>
            <Col sm="8">
                <Form.Control name="filtro" value={texto} onChange={handleChange}/>
            </Col>
            <Col>
                <Link to="/new">
                    <Button variant="success">Nuevo</Button>
                </Link>
            </Col>
        </Form.Group>
    );
}

export default Filtro;