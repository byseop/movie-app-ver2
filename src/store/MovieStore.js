import { observable, action, configure } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

// action 을 통해서 상태변경
configure({ enforceActions: 'observed' });

class MovieStore {
  @observable movieList = [];
  @observable isMovieLoded = false;
  @observable sortMethod = '';
  @observable movieBg = '';
  @observable headerMenu = {
    0: {
      isActive: true,
      text: '현재 상영중인 영화',
    },
    1: {
      isActive: false,
      text: '최근 인기있는 영화'
    },
    2: {
      isActive: false,
      text: '가장 점수높은 영화'
    },
    3: {
      isActive: false,
      text: '최근 개봉 & 개봉 예정 영화'
    },
  };

  @action _callApi = (sortPram) => {
    let SORT = '';
    const NOW_PLAYING = '/movie/now_playing';
    const TRENDING = '/trending/movie/week'
    const TOP_RATED = '/movie/top_rated'
    const UPCOMING = '/movie/upcoming'
    const DEFAULT_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '?api_key=dc11dbd0605b4d60cc66ce5e8363e063';
    const LANGUAGE_KR = '&language=ko-KR';

    // eslint-disable-next-line to the line before.
    if ( sortPram == '0') SORT = NOW_PLAYING // 소트0 -> 현재상영중
    else if (sortPram == '1') SORT = TRENDING // 소트1 -> 최근인기있는 영화
    else if (sortPram == '2') SORT = TOP_RATED // 소트2 -> 고득점 영화
    else if (sortPram == '3') SORT = UPCOMING // 소트3 -> 업커밍 영화
    
    return axios.get(DEFAULT_URL + SORT + API_KEY + LANGUAGE_KR)
      .then (response => response.data)
      .catch(err => console.log(err))
  }

  @action _checkMovieLoad = (movieObj) => {
    if ( !_.isEmpty(movieObj) ) return this.isMovieLoded = true;
    else return false;
  }
  
  @action _getMovies = async(sortPram) => {
    const movies = await this._callApi(sortPram);
    this._setMovie(movies.results);
    // console.log(this.movieList);
    this._checkMovieLoad(this.movieList);
    this._changeMovieBg(this.movieList[0].backdrop_path);

  }

  @action _setMovie = movieData => {
    this.movieList = movieData
  }
  
  @action _changeMovieBg = (theMovieBg) => {
    this.movieBg = theMovieBg;
  }
}

const store = new MovieStore();
export default store;