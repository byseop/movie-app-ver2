import React, { Component } from 'react';

class Movie extends Component{

  handleMouseEnter = () => {
    const changeBg = this.props.bg;
    this.props.store._changeMovieBg(changeBg);
  }

  render() {
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    return (
      <div className="Movie__Box" onMouseOver={this.handleMouseEnter}>
        <div className="Poster__Wrap"><img src={posterUrl + this.props.poster} alt={this.props.title} /></div>
        <div>{this.props.id}</div>       
        <div className="Movie__Info">
          <h4>{this.props.title}</h4>       
          <p><i className="fas fa-star"></i>{this.props.vote_average}</p>    
        </div>   
      </div>
    );
  }
};

export default Movie;