import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

@inject('store')
@observer
class MovieWrapper extends Component {
  componentDidMount(){
    this.props.store._callApi();
  }
  
  render() {
    const store = this.props.store;
    return (
      <>
      <div>{ _.isEmpty(store.movieList) ? 'a' : 'b' }</div>
      </>
    );
  }
}

export default MovieWrapper;