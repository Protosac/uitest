import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import { Provider } from "react-redux";
import Routes from './routes'

import "./static/styles/base/_main.sass"  // Global styles
import "./static/styles/base/_common.sass"  // Global styles
import "./static/_style.sass"  // Css-module styles

import store from "./stores/Root";

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    renderApp(require('./routes').default);
  })
}