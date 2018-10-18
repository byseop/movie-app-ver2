import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Movie from './Movie';
import _ from 'lodash';
import CircularPropgress from '@material-ui/core/CircularProgress';
import '../css/Movie.css';
import bgpng from '../images/bg.png';

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
       store={this.props.store}
     />
   })
   return movies;
 }

 render() {
   const store = this.props.store;

   const posterUrl = 'https://image.tmdb.org/t/p/original'
   const bgStyle = {
     backgroundImage: 'url('+bgpng+')' + ',' + 'url(' + posterUrl + this.props.store.movieBg + ')',
     backgroundSize: 'cover',
     backgroundPosition: 'center center',
     opacity: '.5'
   }

   return (
      <>
      <div className="Detail__View">
        <div className="Movie__Bg" style={bgStyle} />
      </div>
      <div className="Now__Playing">
        <h3>현재 상영중인 영화</h3>
        <div className="Movie__Wrapper">{ store.isMovieLoded ? this._renderMovie() : <div className="Loading"><CircularPropgress /></div> }</div>
      </div>
      </>
   );
 }
}

export default MovieWrapper;