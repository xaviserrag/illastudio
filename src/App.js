import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="App container">
        <img className="logo" src="/logo.png" />
        <div className="description">
          Branding and web design made with care.
        </div>
        <div className="construction">
          Web under construction
        </div>
      </div>
    );
  }
}

export default App;
