import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Movie from './Movie';
import _ from 'lodash';
import CircularPropgress from '@material-ui/core/CircularProgress';
import '../css/Movie.css';

@inject('store')
@observer
class MovieWrapper extends Component {
  componentDidMount(){
    this.props.store._getMovies(0);
  }

  _renderMovie = () => {
    const movies = this.props.store.movieList.map(movie => {
      return <Movie 
        key={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        bg={movie.backdrop_path}
        vote_average={movie.vote_average}
      />
    })
    return movies
  }
  
  render() {
    const store = this.props.store;
    return (
      <>
      <div>{ store.isMovieLoded ? this._renderMovie() : <CircularPropgress /> }</div>
      </>
    );
  }
}

export default MovieWrapper;