import React, { Component } from 'react';
import Counters from './components/CounterGroup'

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" >
        <Counters amount={2}/>
      </div>
    );
  }
}
