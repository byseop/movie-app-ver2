import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class MovieWrapper extends Component {

  componentDidMount(){
    this.props.store._getMovies();
  }

  render() {
    return (
      <>
      </>
    );
  }
}

export default MovieWrapper;