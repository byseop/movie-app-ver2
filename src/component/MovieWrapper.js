import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';

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
      <Button variant="contained" color="primary">
        HELLO!!!
      </Button>
      </>
    );
  }
}

export default MovieWrapper;