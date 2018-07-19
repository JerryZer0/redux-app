import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.inputText = React.createRef()
  }

  calculate=()=>{
    const multipaler = this.props.onMultipaler
    console.log(this.inputText.current.value)
    return multipaler(this.inputText.current.value)
  }

  render() {
    const { state, onIncrement, onDecrement} = this.props;
    return (
      <div className="App">
        <p>
          Clicked: {state} times
        {' '}
          <button onClick={onIncrement}>
            +
          </button>
          <button onClick={onDecrement}>
            -
          </button>
          <input type="text" defaultValue="0" ref={this.inputText}/>
          <button onClick={this.calculate}>
            x2
          </button>
        </p >
      </div>
    );
  }
}

export default App;