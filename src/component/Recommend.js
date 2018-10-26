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
      const recommendedSlice = this.props.store.recommendedMovie.slice(0, this.props.store.recommendCount);
      const recommendMovie = recommendedSlice.map(movie => {
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

    handleRecommendMore = () => {
      this.props.store._recommendMore();
    }

    render() {
      return (
        <div className="Recommend">
          <h3>이 영화의 추천 영화</h3>
          <div className="Recommend__Wrap">
            {this.props.store.isMovieSelected ? this._renderRecommendMovie() : null}
          </div>
          <div className="More" onClick={this.handleRecommendMore}><i className="fas fa-caret-down"></i>더 보기</div>
        </div>
      );
    }
}

export default Recommend;