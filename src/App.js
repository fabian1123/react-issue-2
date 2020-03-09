import React from 'react';
import Filtro from './issues/Filtro';
import IssuesList from './issues/IssuesList';
import { sampleData } from './sampleData';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewIssue from './issues/NewIssue';

//NOTA: Renombrar la clase App.js como Issue.js

class App extends React.Component {
  constructor(props) {
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
  }
 
  render() {
    return (
      //textFiltro es la propiedad para leer y el handleFiltroChange es la propiedad para escribir
      //texto y handleChange son los nombres que le estoy pasando al componente filtro
      //Necesito el switch para que cambie también la URL  
      //Si primero pongo el path / van a coincidir todas las url, por eso la pongo al últmo
      <BrowserRouter>
          <h3>Issues</h3>
        <Switch>
          <Route path="/new">
            <NewIssue />
          </Route>
          <Route exact path="/">
            <div>
              <Filtro texto={this.state.textFiltro} handleChange={this.handleFiltroChange}/>
              <IssuesList data={this.state.issuesFiltrados} />//Coloco issues en lugar de sampleData ya que esta es la variable que toma el valor de sampleData
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
