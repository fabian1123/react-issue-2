import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

//Recibo de App.js el texto y el manejador del evento
function Filtro(props) {
    return (
        <Container>
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
        </Container>
    );
}

export default withRouter(Filtro);