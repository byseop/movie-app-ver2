import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import '../css/header.css';

@inject('store')
@observer
class Header extends Component {
    handleNowPlaying = () => {
      this.props.store._getMovies(0);
    }
    handleTrending = () => {
      this.props.store._getMovies(1);
    }
    handleTopRated = () => {
      this.props.store._getMovies(2);
    }
    handleUpcoming = () => {
      this.props.store._getMovies(3);
    }
    render() {
      const store = this.props.store;
      return (
        <header className="Header">
          <div className="Header__Inner">
            <gnb className="gnb">
              <ul>
                <li className="on" onClick={this.handleNowPlaying} sort="0" >현재 상영중인 영화</li>
                <li onClick={this.handleTrending} sort="1" >최근 인기있는 영화</li>
                <li onClick={this.handleTopRated} sort="2">가장 점수높은 영화</li>
                <li onClick={this.handleUpcoming} sort="3">최근 개봉 &amp; 개봉 예정 영화</li>
              </ul>
            </gnb>
          </div>
        </header>
      );
    }
}

export default Header;