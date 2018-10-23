import React from 'react';

const DetailInfo = ({title, og_title, poster, runtime, vote_average, /*genre,*/ key}) => {
  return (
    <>
        <div>{key}</div>
        <div>{title}</div>
        <div>{og_title}</div>
        <div>{poster}</div>
        <div>{runtime}</div>
        <div>{vote_average}</div>
        <div>{title}</div>
        {/* <MovieGenre genre={genre}/> */}
    </>
  );
};

// function MovieGenre ({genre}) {
//   return <span className="Movie__Genre">{genre}</span>
// }

export default DetailInfo;