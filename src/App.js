import React, { Component } from 'react';
import './App.css';
import Calculadora from './main/Calculadora';
import './main/Calculadora.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calculadora</h1>
        <Calculadora />
      </div>
    );
  }
}

export default App;
