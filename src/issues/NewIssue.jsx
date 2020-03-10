import React from 'react';
import { Button, Form, Col, Container } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm } from 'formik';
import { addIssue } from '../api';
import { withRouter } from 'react-router-dom';
//Le pongo un alias al FormikForm ya que hay 2 que se llaman Form
class NewIssue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values, { setSubmitting }) {
        alert("onSubmit values: " + JSON.stringify(values, null, 2));

        addIssue(values);
        setSubmitting(false);
        this.props.onNewIssue();
        this.props.history.push('/');
    }

    render() {

        const initialValues = {
            titulo: '',
            contenido: '',
            usuario: ''
        };

        return (
            <div>
                <Container>
                    <h4>Nuevo Issue</h4>
                    <Formik onSubmit={(this.onSubmit)}
                        initialValues={initialValues}>
                        {() => (//Aquí devuelvo el formulario
                            <FormikForm>
                                <Form.Group>
                                <Col sm="10" lg="11">
                                    <Form.Label>Título</Form.Label>
                                    <Field name="titulo" required as={Field} as={Form.Control/*Le coloco as={Form.Control} para no perder los estilos de bootstrap cuando voy a usar Field(elemento de Formik y no de Bootstrap) */} />
                                </ Col>
                                </Form.Group>
                                <Form.Group>

                                    <Col sm="10" lg="11">
                                        <Form.Label>Contenido</Form.Label>
                                        <Form.Control name="contenido" component="textarea" rows="10" required as={Field /**Esto es para que me obligue a llenar el campo */} as={Field} />
                                    </Col>

                                </Form.Group>
                                <Form.Group>
                                <Col sm="10" lg="11">
                                    <Form.Label>Usuario</Form.Label>
                                    <Field name="usuario" required as={Field} as={Form.Control} />
                                </ Col>
                                </Form.Group>
                                <Button type="submit">Crear</Button>
                            </FormikForm>
                        )}
                    </Formik>
                </Container>
            </div>
        )
    }
}

export default withRouter(NewIssue);