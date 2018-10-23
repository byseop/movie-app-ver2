import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Movie from './Movie';
import DetailInfo from './DetailInfo'
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
       id={movie.id}
       title={movie.title}
       poster={movie.poster_path}
       bg={movie.backdrop_path}
       vote_average={movie.vote_average}
       store={this.props.store}
     />
   })
   return movies;
 }

  _renderDetail = () => {
    const detailInfo = this.props.store.selectedMovie && this.props.store.selectedMovie.map(movie => {
      return <DetailInfo 
        key={movie.id}
        title={movie.title}
        og_title={movie.original_title}
        poster={movie.poster_path}
        runtime={movie.runtime}
        vote_average={movie.vote_average}
        genre={movie.genres}
      />
    })
    return detailInfo;
  }

  render() {
    const store = this.props.store;

    const posterUrl = 'https://image.tmdb.org/t/p/original'
    const bgStyle = {
      backgroundImage: 'url('+bgpng+')' + ',' + 'url(' + posterUrl + store.movieBg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      opacity: '.5'
    }

    return (
      <>
      <div className={store.isMovieSelected ? 'Detail__View on' : 'Detail__View'}>
        <div className={store.isMovieSelected ? 'Detail__Info on' : 'Detail__Info'}>
          {store.isMovieSelected ? this._renderDetail() : null}
        </div>
        <div className="Movie__Bg" style={bgStyle} />
      </div>
      <div className={store.isMovieSelected ? 'Movie__Section on' : 'Movie__Section'}>
        <h3>{store.sortMethodName}</h3>
        <div className="Movie__Wrapper">{ store.isMovieLoded ? this._renderMovie() : <div className="Loading"><CircularPropgress /></div> }</div>
      </div>
      </>
    );
  }
}

export default MovieWrapper;