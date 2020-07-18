import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './theme';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
