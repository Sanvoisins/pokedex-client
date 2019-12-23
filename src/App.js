import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/layout/navbar/navbar";
import Home from './components/layout/home/home';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
        <div className="container">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
