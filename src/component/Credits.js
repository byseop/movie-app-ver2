import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Credits extends Component {

    _renderCast = () => {
      const castSlice = this.props.store.cast.slice(0, this.props.store.castCount); 
      const cast = castSlice.map(castList => {
        return (
          <div className="Credit__List" key={castList.id}>
            <div className="Profile__Photo">
              {castList.profile_path == null ? <i class="fas fa-user"></i> : <img src={'https://image.tmdb.org/t/p/w300'+ castList.profile_path} alt={ castList.name }/>}
            </div>
            <p className="Top"><span>{castList.character}</span>역</p><p className="Bottom">{castList.name}</p>
          </div>
        )
      });
      return cast;
    }

    handleCastCount = () => {
      this.props.store._upCastCount();
    }

    render() {
      const posterUrl = 'https://image.tmdb.org/t/p/w300';
      return (
        <div className="Credits">
          <h3>이 영화의 감독 / 출연진</h3>
          <div className="Credit__List__Wrap">
            <div className="Credit__List">
              <div className="Profile__Photo">
                {this.props.store.director.path == null ? <i class="fas fa-user"></i> : <img src={posterUrl + this.props.store.director.path} alt={this.props.store.director.name} />}
              </div>
              <p className="Top">감독</p><p className="Bottom">{this.props.store.director.name}</p>
            </div>
            {this._renderCast()}
          </div>
          <div className="More" onClick={this.handleCastCount}><i className="fas fa-caret-down"></i>더 보기</div>
        </div>
      );
    }
}

export default Credits;