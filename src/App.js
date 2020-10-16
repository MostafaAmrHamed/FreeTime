import React, { Component } from 'react';

import Navbar from './components/navbar/navbar-container';
import Home from './components/home/home-container'
class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;