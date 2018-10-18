import React from 'react';

const Movie = ({ id, title, poster, bg, vote_average, store }) => {

  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  const handleMouseEnter = () => {
    const changeBg = bg

    store._changeMovieBg(changeBg);
    console.log(changeBg);
  }

  return (
    <div className="Movie__Box" onClick={handleMouseEnter()}>
      <div className="Poster__Wrap"><img src={posterUrl + poster} alt={title} /></div>
      <div>{id}</div>       
      <div className="Movie__Info">
        <h4>{title}</h4>       
        <p><i className="fas fa-star"></i>{vote_average}</p>    
      </div>   
    </div>
  );
};

export default Movie;