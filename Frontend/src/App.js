import React, { Component } from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavigationBar />
      </div>
    );
  }
}

export default App;
