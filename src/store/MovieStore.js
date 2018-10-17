import { observable, action, configure } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

// action 을 통해서 상태변경
configure({ enforceActions: 'observed' });

class MovieStore {
  @observable movieList = [];
  @observable isMovieLoded = false;
  @observable sortMethod = '';

  @action _callApi = () => {
    const NOW_PLAYING = '/now_playing';
    const DEFAULT_URL = 'https://api.themoviedb.org/3/movie';
    const API_KEY = '?api_key=dc11dbd0605b4d60cc66ce5e8363e063';
    const LANGUAGE_KR = '&language=ko-KR';
    
    if (this.sortMethod === '0') { 
      // 소트 0 -> 현재 상영중
      return axios.get(DEFAULT_URL + NOW_PLAYING + API_KEY + LANGUAGE_KR)
        .then (response => response.data)
        .then (json => console.log(json))
        .catch(err => console.log(err))
    }
  }
  
  @action _getMovies = async(sortPram) => {
    this.sortMethod = sortPram;
    const movies = await this._callApi();
    // this.movieList = movies.results;
    // console.log(this.movieList);
    // this.checkMovieLoad(this.movieList);
  }
  @action _checkMovieLoad = (movieObj) => {
    if ( !_.isEmpty(movieObj) ) this.isMovieLoded =! this.isMovieLoded;
    else console.log('Error!');
  }
}

const store = new MovieStore();
export default store;