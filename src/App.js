import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Users from './util/Person';

import ClippedDrawer from './components/navbar';

import Greeting from './components/classes';
import Button from './components/button';
import Clock from './components/clock';
import Actionlight from './components/handleEvent'
import Card from './components/card';
import ListPerson from './components/lists'
import SelectList from './components/forms/selectForm';
import Calculator from './components/liftingState';
import Panel from './components/composition';
import TodoApp from './TodoApp';

 const options = [
    {
      title: 'Ejercio 1',
      link: '/INRI6'
    },
    {
      title: 'Ejercio 2',
      link: '/INRI7'
    },
    {
      title: 'Ejercio 3',
      link: '/INRI8'
    },
    {
      title: 'Ejercio 4',
      link: '/INRI9'
    },
    {
      title: 'Ejercio 5',
      link: '/INRI10'
    },
    {
      title: 'Ejercio 6',
      link: '/INRI11'
    },
    {
      title: 'Ejercio 7',
      link: '/INRI12'
    },
    {
      title: 'Ejercio 8',
      link: '/INRI13'
    },
    {
      title: 'Ejercio 9',
      link: '/INRI14'
    },
  ];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      activeButton: true
    };
    this.delButton = this.delButton.bind(this);
  }


  delButton() {
    this.setState({
      activeButton: false
    });
  }

  render() {
    return (
      <div className="App">
          <Router>
              <ClippedDrawer options={options} title="Aprendizaje de react">
              <img src={logo} className="App-logo" alt="logo"/>
                <Switch>
                  <Route path="/INRI6">
                    <Greeting name="Friends" />
                  </Route>
                  <Route path="/INRI7">
                    <Clock />
                    { this.state.activeButton &&  <Button delbutton={this.delButton} /> }
                  </Route>
                  <Route path="/INRI8">
                    <h1>Manejo de Eventos</h1>
                    <Actionlight/>
                  </Route>
                  <Route path="/INRI9">
                    <div className="card-ui">
                    {
                      Users.map( (person) => {
                        return <Card key={person.rol} user={person} />;
                      })
                    }
                    </div>
                  </Route>
                  <Route path="/INRI10">
                    <h1>Listas y Keys</h1>
                    <div>
                      Characters are obtained of <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>
                    </div>
                    <ListPerson />
                  </Route>
                  <Route path="/INRI11">
                    <h1>Selector de personajes</h1>
                    <SelectList />
                  </Route>
                  <Route path="/INRI12">
                    <h1>Levantamiento de estado</h1>
                    <div className="card-ui">
                      <Calculator />
                    </div>
                  </Route>
                  <Route path="/INRI13">
                    <h1>Composición</h1>
                    <div className="card-ui">
                      <Panel>
                        <h2>Compuestos Quimicos</h2>
                        <p>(agregado con props children.)</p>
                        <em>Se podrian agregar Instrucciones en este punto para no modificar la funcionalidad.</em>
                      </Panel>
                    </div>
                  </Route>
                  <Route path="/INRI14">
                    <div className="card-ui">
                      <TodoApp />
                    </div>
                  </Route>
                </Switch>
              </ClippedDrawer>
          </Router>
      </div>
    );
  }
}

export default App;
