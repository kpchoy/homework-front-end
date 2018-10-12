import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {HashRouter} from 'react-router-dom'; 
import { Provider } from 'react-redux';
import configureStore from './store/store';

const Root = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
}

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(<Root/>, document.getElementById('root'))
})

