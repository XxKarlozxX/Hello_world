import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux'
import { characters,removeCharacter } from './services/actions/characters'
import { getCharactersData } from './services/selectors/characters'

import './App.css';
import Users from './util/Person';

import ClippedDrawerWrapped from './components/navbar';

import Greeting from './components/classes';
import Button from './components/button';
import Clock from './components/clock';
import Actionlight from './components/handleEvent'
import Card from './components/card';
import ListPerson from './components/lists'
import SelectList from './components/forms/selectForm';
import Calculator from './components/liftingState';
import Panel from './components/composition';
import ImgMediaCard from './containers/ListCharacters';
import ContactPage from './containers/redux-forms'
import WrappedComponent from './components/needingLocal';
import ButtonCont from './components/buttonCont';
import SearchEngine from './components/hooks/';
import ColorMemo from './components/memo';
import ExpensiveProcess from './components/useMemo';

const options = [
    {
      title: 'Ejercio 1 - INRI6',
      link: '/INRI6'
    },
    {
      title: 'Ejercio 2 - INRI7',
      link: '/INRI7'
    },
    {
      title: 'Ejercio 3 - INRI8',
      link: '/INRI8'
    },
    {
      title: 'Ejercio 4 - INRI9',
      link: '/INRI9'
    },
    {
      title: 'Ejercio 5 - INRI10',
      link: '/INRI10'
    },
    {
      title: 'Ejercio 6 - INRI11',
      link: '/INRI11'
    },
    {
      title: 'Ejercio 7 - INRI12',
      link: '/INRI12'
    },
    {
      title: 'Ejercio 8 - INRI13',
      link: '/INRI13'
    },
    {
      title: 'React Redux - INRI14',
      link: '/INRI14'
    },
    {
      title: 'Redux Form - INRI15',
      link: '/INRI15'
    },
    {
      title: 'HOC - INRI17',
      link: '/INRI17'
    },
    {
      title: 'Should component update - INRI18',
      link: '/INRI18'
    },
    {
      title: 'React Memo - INRI19',
      link: '/INRI19'
    },
    {
      title: 'useMemo - INRI20',
      link: '/INR20'
    },
    {
      title: 'Hooks - INRI120',
      link: '/INRI111'
    },
   
  ];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      activeButton: true,
    };
    this.delButton = this.delButton.bind(this);
    this.removeChar = this.removeChar.bind(this);
  }

  delButton() {
    this.setState({
      activeButton: false
    });
  }

  removeChar(e) {
    this.props.removeCharacter(e.currentTarget.value)
  }

  componentDidMount() {
    this.props.characters();
  }

  render() {
    return (
      <div className="App">
          <Router>
              <ClippedDrawerWrapped options={options} title="Aprendizaje de react">
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
                    <h1>Personajes de Rick & Morty</h1>
                    <div className="card-ui">
                      {
                        this.props.chars.map( chars => {
                          return(
                            <ImgMediaCard key={chars.id} character={chars} handleRemove={this.removeChar}/>
                          );
                        })
                      }
                    </div>
                  </Route>
                  <Route path="/INRI15">
                    <ContactPage />
                  </Route>
                  <Route path="/INRI17">
                      <WrappedComponent />
                  </Route>
                  <Route path="/INRI18">
                    <h1>Should Component Update</h1>
                    <div className="card-ui">
                      <ButtonCont />
                    </div>
                  </Route>
                  <Route path="/INRI19">
                    <h1>React.Memo</h1>
                    <div className="card-ui">
                      <ColorMemo />
                    </div>
                  </Route>
                  <Route path="/INR20">
                    <h1>useMemo</h1>
                    <div className="card-ui">
                      <ExpensiveProcess />
                    </div>
                  </Route>
                  <Route path="/INRI111">
                      <SearchEngine />
                  </Route>
                </Switch>
              </ClippedDrawerWrapped>
          </Router>
      </div>
    );
  }
}

export default connect(
  state => ({chars: getCharactersData(state) }),
  { characters, removeCharacter }
)(App);
