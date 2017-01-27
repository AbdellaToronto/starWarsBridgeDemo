import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routing/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



ReactDOM.render(
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('root')
);
