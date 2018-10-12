import React, { Component } from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import './App.css';
import SplashSearch from './components/splash_search';
import IndexGifs from './components/index_gifs';

class App extends Component {
  render() {
    return (
      <div>

          <Switch>
            <Route exact path="/gifs" component={IndexGifs} />
            <Route path="/" component={SplashSearch} />
          </Switch>

      </div>
    );
  }
}

export default App;
