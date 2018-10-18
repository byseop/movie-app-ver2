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

  @action _callApi = (sortPram) => {
    let SORT = '';
    const NOW_PLAYING = '/now_playing';
    const DEFAULT_URL = 'https://api.themoviedb.org/3/movie';
    const API_KEY = '?api_key=dc11dbd0605b4d60cc66ce5e8363e063';
    const LANGUAGE_KR = '&language=ko-KR';

    // eslint-disable-next-line to the line before.
    if ( sortPram == '0') SORT = NOW_PLAYING // 소트0 -> 현재상영중
    
    return axios.get(DEFAULT_URL + SORT + API_KEY + LANGUAGE_KR)
      .then (response => response.data)
      .catch(err => console.log(err))
  }

  @action _checkMovieLoad = (movieObj) => {
    if ( !_.isEmpty(movieObj) ) this.isMovieLoded = !this.isMovieLoded;
    else console.log('Error!');
  }
  
  @action _getMovies = async(sortPram) => {
    const movies = await this._callApi(sortPram);
    this.movieList = movies.results;
    console.log(this.movieList);
    this._checkMovieLoad(this.movieList);
    this._changeMovieBg(this.movieList[0].backdrop_path)
  }  
  
  @action _changeMovieBg = (theMovieBg) => {
    this.movieBg = theMovieBg;
  }
}

const store = new MovieStore();
export default store;