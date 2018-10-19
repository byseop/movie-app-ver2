import { observable, action, configure } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

// action 을 통해서 상태변경
configure({ enforceActions: 'observed' });

class MovieStore {
  @observable movieList = [];
  @observable isMovieLoded = false;
  @observable sortMethod = '';
  @observable sortMethodName = '현재 상영중인 영화';
  @observable movieBg = '';

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
    if ( sortPram == '0') {
      // 소트0 -> 현재상영중
      SORT = NOW_PLAYING;
      this.sortMethodName = '현재 상영중인 영화';
    }
    else if ( sortPram == '1' ) {
    // 소트1 -> 최근인기있는 영화
      SORT = TRENDING;
      this.sortMethodName = '최근 인기있는 영화'
    }
    else if (sortPram == '2') {
      // 소트2 -> 고득점 영화
      SORT = TOP_RATED;
      this.sortMethodName = '최근 평점높은 영화'
    }
    else if (sortPram == '3') {
      // 소트3 -> 업커밍 영화
      SORT = UPCOMING;
      this.sortMethodName = '최근 개봉 & 예정 영화'
    }
    
    return axios.get(DEFAULT_URL + SORT + API_KEY + LANGUAGE_KR)
      .then (response => response.data)
      .catch(err => console.log(err))
  }

  @action _checkMovieLoad = (movieObj) => {
    // 영화 로딩 체크
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