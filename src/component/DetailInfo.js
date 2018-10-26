import React, { Component } from 'react';
import Recommend from './Recommend';

class DetailInfo extends Component {

  _renderGenre = () => {
    const genres = this.props && this.props.genre && this.props.genre.map(genre => {
      return (<Genre genre={genre.name} key={genre.id} />);
    })
    return genres;
  }

  render() {
    const posterUrl = 'https://image.tmdb.org/t/p/original'

    return (
      <>
        <div className="Poster__Wrap Detail__Poster">
          <img src={posterUrl + this.props.poster} alt={this.props.title}/>
        </div>
        <div className="Text__Info">
          <h2>{this.props.title}</h2>
          <h3>{this.props.og_title}</h3>
          <p><span className="Vote__Average"><i className="fas fa-star"></i>{this.props.vote_average}</span> <span className="Running__Time"><i className="far fa-clock"></i> {this.props.runtime}분</span></p>
          <div className="Genre__Wrapp">{this._renderGenre()}</div>
          <p className="Tagline">{this.props.tagline}</p>
          <p className="Summary">{this.props.summary}</p>
        </div>
        <Recommend />
      </>
    );
  }
}

function Genre ({genre}) {
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

export default DetailInfo;