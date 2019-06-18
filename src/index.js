import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";
import Documentation from "layouts/Documentation/Documentation.jsx";

import "assets/css/material-dashboard-react.css?v=1.7.0";

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
