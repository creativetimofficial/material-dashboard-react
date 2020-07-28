/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Menu from "layouts/Menu.js";

import "assets/css/material-dashboard-react.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Menu} />
      <Redirect from="/" to="/admin/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
