import React from 'react';

const Movie = ({ id, title, poster, bg, vote_average }) => {
  return (
    <>
        <div>{id}</div>       
        <div>{title}</div>       
        <div>{poster}</div>       
        <div>{bg}</div>       
        <div>{vote_average}</div>       
    </>
  );
};

export default Movie;