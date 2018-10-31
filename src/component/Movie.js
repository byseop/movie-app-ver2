import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Movie extends Component{

  handleMouseEnter = () => {
    const changeBg = this.props.bg;
    this.props.store._changeMovieBg(changeBg);
  }

  handleMovieSelect = () => {
    const selectedMovieId = this.props.id;
    this.props.store._movieSelectToggle();
    this.props.store._getDetailMovie(selectedMovieId);
    this.props.store._setRecommendCountRestore();
    this.props.store._setCastCountRestore();

    var DetailBox = document.querySelector('.Detail__Info');
    DetailBox.scrollTo(0, 0);
  }

  handleBgRestore = () => {
    this.props.store._setBgRestore();
  }

  render() {
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    return (
      <div className="Movie__Box" onMouseOver={this.handleMouseEnter} onClick={this.handleMovieSelect} onMouseLeave={this.props.store.isMovieSelected ? this.handleBgRestore : null}>
        <div className="Poster__Wrap"><img src={posterUrl + this.props.poster} alt={this.props.title} /></div>
        <div className="Movie__Info">
          <h4>{this.props.title}</h4>       
          <p><i className="fas fa-star"></i>{this.props.vote_average}</p>    
        </div>   
      </div>
    );
  }
};

export default Movie;