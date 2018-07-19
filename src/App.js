import React, { Component } from 'react';
import Counters from './components/CounterGroup'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
        <br />
        <Counters amount={2}/>
      </div>
    );
  }
}
