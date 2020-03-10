import React from 'react';
import Filtro from './issues/Filtro';
import IssuesList from './issues/IssueList';
import { sampleData } from './sampleData';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Issues from './issues/Issues';
import { Container, Navbar } from 'react-bootstrap';
import './app.css';

//NOTA: Renombrar la clase App.js como Issue.js

class App extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {//Estoy creando una variable dentro del estado llamada issues y la estoy inicializando con el sampleData
      issues: sampleData,//issues originales
      textFiltro: '',//en base a lo que dice el texto...
      issuesFiltrados: sampleData//...Voy a ir cambiando el issue filtrado.
    }
  
    this.handleFiltroChange = this.handleFiltroChange.bind(this);
  }

  handleFiltroChange(e){//Agregamos el evento
    const text = e.target.value;//Lo que está escrito en el campo?
    const filtrados = this.state.issues.filter(issueItem => issueItem.titulo.toUpperCase().indexOf(text.toUpperCase()) != -1);//Filter recibe cada elemento y devuelve true o false diciendo si debería estar en el resultado o no.
    //filter me devuelve otro array, que es una copia del mismo, pero con menos items

    this.setState({//Con una llamada al setState le cambio 2 valores al estado
      textFiltro: text,//Conectamos el campo de texto.
      issuesFiltrados: filtrados
    });
  }*/

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="NavBar">
          <Navbar.Brand href="/issues">
            <h4 className="tituloNBar"> Issues </h4>
          </Navbar.Brand>
        </Navbar>

        <BrowserRouter>
          <div className="app">
            <Switch>
              <Route path="/issues">
                <Issues />
              </Route>
              <Route>
                <Redirect path="/" to="/issues" />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
