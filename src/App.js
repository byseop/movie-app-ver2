import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import MovieWrapper from './component/MovieWrapper';
import './App.css';
import Header from './component/Header';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieWrapper />
        <copyright>copyright byseop@gmail.com</copyright>
      </div>
    );
  }
}

export default App;
