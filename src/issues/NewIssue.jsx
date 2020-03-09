import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm } from 'formik';
//Le pongo un alias al FormikForm ya que hay 2 que se llaman Form
class NewIssue extends React.Component {
    render() {
        return (
            //Hay que ponerle nombre al campo, ya que Formik utiliza el nombre del campo para basarse en el valor en el estado
            //Al ponerle name="titulo", el formulario va a enviar un objeto que tiene el atributo titulo, por eso es imoprtante ponerle el name
            //Los datos los estaría guardando en la variable values que me da la librería Formik
            //onSubmit es un atributo donde le paso una funcion que es la que va a recibir el envío del formulario
            //Necesito ponerle un valor inicial en initialValues={}
            //No le paso directamente el form. Le estoy pasando una funcion que me va a devolver el form. Esto lo hago para poder usar las variables que me da la libreria

            <div>
                <h4>Nuevo Issue</h4>
                <Formik onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));//Ver el contenido de values
                }} initialValues={{
                    titulo: '',
                    contenido: '',
                    usuario: ''
                }}>
                    {() => (//Aquí devuelvo el formulario
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

export default NewIssue;