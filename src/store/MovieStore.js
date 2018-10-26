import { observable, action, configure } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

// action 을 통해서 상태변경
configure({ enforceActions: 'observed' });

class MovieStore {
  @observable movieList = []; // 메인 영화 리스트
  @observable isMovieLoded = false; // 영화가 로드되었는지 체크
  @observable sortMethod = ''; // 소트 방법
  @observable sortMethodName = '현재 상영중인 영화'; // 소트 이름
  @observable movieBg = ''; // 메인 bg
  @observable isMovieSelected = false; // 영화가 선택되었는지 체크
  @observable selectedMovie = []; // 선택된 영화
  @observable isRecommend = false; // 추천 영화 체크
  @observable recommendedMovie = []; // 추천 영화
  @observable recommendCount = 3 // 추천영화 갯수

  @action _callApi = (sortPram) => {
    // API 불러오기
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

  @action _checkMovieLoad = movieObj => {
    // 영화 로딩 체크
    if ( !_.isEmpty(movieObj) ) return this.isMovieLoded = true;
    else return false;
  }
  
  @action _getMovies = async(sortPram) => {
    // 영화 리스트 불러오기
    const movies = await this._callApi(sortPram);
    this._setMovie(movies.results);
    // console.log(this.movieList);
    this._checkMovieLoad(this.movieList);
    this._changeMovieBg(this.movieList[0].backdrop_path);
  }

  @action _setMovie = (movieData) => {
    // 영화리스트 동기화
    this.movieList = movieData
  }
  
  @action _changeMovieBg = theMovieBg => {
    // 메인 BG 영화리스트와 동기화
    this.movieBg = theMovieBg;
  }

  @action _movieSelectToggle = () => {
    // 영화 선택시 화면전환 토글
    this.isMovieSelected = !this.isMovieSelected;
  }

  @action _callDetail = id => {
    // 영화 선택시 디테일정보 호출
    const DEFAULT_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '?api_key=dc11dbd0605b4d60cc66ce5e8363e063';
    const LANGUAGE_KR = '&language=ko-KR';
    const MOVIE_ID = '/movie/'+id;

    return axios.get(DEFAULT_URL + MOVIE_ID + API_KEY + LANGUAGE_KR)
      .then (response => response.data)
      .catch (err => console.log(err))
  }

  @action _getDetailMovie = async(id) => {
    const sMovie = await this._callDetail(id);
    this._setDetailInfo(sMovie);
    // console.log(this.selectedMovie);
  }

  @action _setDetailInfo = (detailInfo) => {
    this.selectedMovie = detailInfo;
  }

  @action _callRecommendMovie = id => {
    const DEFAULT_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '?api_key=dc11dbd0605b4d60cc66ce5e8363e063';
    const LANGUAGE_KR = '&language=ko-KR';
    const RECOMMEND_MOVIE_ID = '/movie/'+id+'/recommendations';

    return axios.get(DEFAULT_URL + RECOMMEND_MOVIE_ID + API_KEY + LANGUAGE_KR)
      .then (response => response.data)
      .catch (err => console.log(err))
  }

  @action _getRecommendMovie = async(id) => {
    const rMovie = await this._callRecommendMovie(id);
    this._setRecommendMovie(rMovie.results);
  }

  @action _setRecommendMovie = (recommendations) => {
    this.recommendedMovie = recommendations;
  }

  @action _toggleRecommend = () => {
    this.isRecommend = !this.isRecommend;
  }

  @action _setClearSelectedMovie = () => {
    this.selectedMovie = {};
  }

  @action _setBgRestore = () => {
    this._changeMovieBg(this.selectedMovie.backdrop_path);
  }

  @action _recommendMore = () => {
    this.recommendCount = this.recommendCount + 6;
  }

  @action _setRecommendCountRestore = () => {
    this.recommendCount = 3;
  }
}

const store = new MovieStore();
export default store;