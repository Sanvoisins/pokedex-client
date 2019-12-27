import React from 'react'; 
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/layout/navbar/navbar";
import Home from './components/layout/home/home';
import PokemonDetail from './components/pokemon/pokemon-detail/pokemon-detail'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon/:pokemonNumber" component={PokemonDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
