/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Documentation from "layouts/Documentation/Documentation.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createHashHistory();

ReactPixel.init("111649226022273");
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

hist.listen(location => {
  ReactPixel.pageView();
  ReactPixel.fbq("track", "PageView");
});

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
