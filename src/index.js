import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
  Router,
} from 'react-router-dom';
import AppRouter from 'router';
import 'assets/css/material-dashboard-react.css';
import { UserProvider } from 'contexts/User';

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <UserProvider>
      <AppRouter />
    </UserProvider>
  </Router>,
  document.getElementById('root'),
);
