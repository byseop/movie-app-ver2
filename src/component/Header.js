import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles'
import '../css/header.css';

const styles = {
  tabsRoot: {},
  tabsIndicator: {
    backgroundColor: 'transparent',
  },
  tabRoot: {
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: [
      'Noto Sans KR',
      'Roboto',
      'sans-serif',
    ],
    opacity: '0.6',
    '&:hover': {
      color: '#fff',
      opacity: '.8',
    },
    '&tabSelected': {
      color: '#fff',
      opacity: '1',
    },
    '&:focus': {
      color: '#fff',
    }
  },  
  tabSelected: {},
}

@inject('store')
@observer
class Header extends Component {
  state = {
    value: 0,
    value2: 0
  }
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
    handleChange = (event, value) => {
      this.setState({ value });
    }
    handleBackHome = () => {
      this.props.store._backHome();
      this.props.store._setClearSelectedMovie();
      this.props.store._setRecommendCountRestore();
    }

    render() {
      const { classes } = this.props;
      const { value, value2 } = this.state;
      const store = this.props.store;

      return (
        <header className={store.isMovieSelected ? 'Header on' : 'Header'}>
          <div className="Header__Inner">
            <Tabs
              value={value}
              onChange={this.handleChange}
              classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            >
              <Tab
                label="현재 상영중인 영화"
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                onClick={this.handleNowPlaying}
              />
              <Tab
                label="최근 인기있는 영화"
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                onClick={this.handleTrending}
              />
              <Tab
                label="최근 평점높은 영화"
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                onClick={this.handleTopRated}
              />
              <Tab
                label="최근 개봉 &amp; 예정 영화"
                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                onClick={this.handleUpcoming}
              />
            </Tabs>
          </div>
          <div className="Back__Home">
            <Tabs
              value={value2}
              onChange={this.handleChange}
              classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            >
              <Tab 
                label="뒤로 가기"
                classes={{ root: classes.tabRoot}}
                onClick={this.handleBackHome}
              />
            </Tabs>
          </div>
        </header>
      );
    }
}

export default withStyles(styles)(Header);