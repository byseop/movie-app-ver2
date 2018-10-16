import { observable, action, configure } from 'mobx';
import axios from 'axios';

// action 을 통해서 상태변경
configure({ enforceActions: 'observed' });

class MovieStore {
  @observable movieList = {};
  @action _callApi = () => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=dc11dbd0605b4d60cc66ce5e8363e063&language=ko-KR')
      .then(action(response => this.movieList = response.data.results))
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }
}

const store = new MovieStore();
export default store;