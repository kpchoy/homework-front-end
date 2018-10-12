import React, { Component } from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import './App.css';
import SplashSearch from './components/splash_search';
import IndexGifsContainer from './components/index/index_gifs_container';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SplashSearch} />
          <Route exact path="/search/:query" component={IndexGifsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
