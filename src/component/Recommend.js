import React, { Component } from 'react';
import Movie from './Movie';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';

@inject('store')
@observer
class Recommend extends Component {

  componentDidMount() {
    const recommendId = this.props.store.selectedMovie.id;
    if ( !(_.isEmpty(this.props.store.selectedMovie)) ) {
      this.props.store._getRecommendMovie(recommendId);
    }
  }
        
    _renderRecommendMovie = () => {
      const recommendMovie = this.props.store.recommendedMovie.map(movie => {
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
      return recommendMovie;
    }

    render() {
      return (
        <div className="Recommend">
          <h3>이 영화와 관련된 영화</h3>
          <div className="Recommend__Wrap">
            {this.props.store.isMovieSelected ? this._renderRecommendMovie() : null}
          </div>
        </div>
      );
    }
}

export default Recommend;