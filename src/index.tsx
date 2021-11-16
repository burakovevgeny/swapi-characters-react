import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyle } from './theme';
import App from './App';
import { store } from './redux/index';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
