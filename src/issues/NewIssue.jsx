import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm } from 'formik';
import { addIssue } from '../api';
import { withRouter } from 'react-router-dom';
//Le pongo un alias al FormikForm ya que hay 2 que se llaman Form
class NewIssue extends React.Component {

    constructor(props){
        super(props);
        this.state = {};

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values, {setSubmitting}){
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
                <h4>Nuevo Issue</h4>
                <Formik onSubmit={(this.onSubmit)} 
                        initialValues={initialValues}>
                    {({isSubmitting}) => (//Aquí devuelvo el formulario
                            <FormikForm>
                                <Form.Group>
                                    <Form.Label>Título</Form.Label>
                                    <Field name="titulo" as={Form.Control/*Le coloco as={Form.Control} para no perder los estilos de bootstrap cuando voy a usar Field(elemento de Formik y no de Bootstrap) */}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contenido</Form.Label>
                                    <Field name="contenido" as={Form.Control}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Usuario</Form.Label>
                                    <Field name="usuario" as={Form.Control}/>
                                </Form.Group>
                                <Button type="submit">Crear</Button>
                            </FormikForm>
                        )}
                </Formik>
            </div>
        )
    }
}

export default withRouter(NewIssue);