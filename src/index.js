import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import "./assets/css/material-dashboard-react.css";

import indexRoutes from "routes/index.jsx";

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_USER = gql`
  {
    allMembers {
      id, name, problemStatement, status
    }
  }
`

const hist = createBrowserHistory();

const client = new ApolloClient({ uri: 'https://api.graph.cool/simple/v1/cjj427tx560nm0115d6jn7q18' });

const RouterWrapper = AppComponent => (
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>
)

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <RouterWrapper />
  </ApolloProvider>
);

ReactDOM.render(
  <ApolloApp />,
  document.getElementById("root")
);
