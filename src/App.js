import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component {
  state = { value: 0 }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter Example</h1>
        </header>
        <div>
          <p>{this.state.value}</p>
          <Counter/>
          <Counter/>
          <Counter/>
          <Counter/>
          <Counter/>
          <Counter/>
        </div>
      </div>
    );
  }
}

export default App;
