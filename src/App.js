import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import MovieWrapper from './component/MovieWrapper';
import './App.css';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieWrapper />
      </div>
    );
  }
}

export default App;
