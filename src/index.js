import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {HashRouter} from 'react-router-dom'; 
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return (
    <Provider store = {store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store = {store}/>, document.getElementById('root'))
})

