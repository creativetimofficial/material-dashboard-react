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
import { Grid } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";

import DocHeader from "./DocHeader/DocHeader";
import DocSidebar from "./DocSidebar/DocSidebar";

import docRoutes from "documentation.js";

class Documentation extends React.Component {
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.body.style.overflow = "auto";
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  render() {
    return (
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <DocHeader />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={2}
            xl={2}
            style={{ marginTop: "75px", marginBottom: "75px" }}
          >
            <DocSidebar routes={docRoutes} {...this.props} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={5}
            style={{
              marginTop: "75px",
              marginBottom: "75px",
              minHeight: "calc(100vh - 75px)",
            }}
          >
            <Switch>
              {docRoutes.map((prop, key) => {
                if (prop.redirect)
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                return prop.routes.map((prop, key) => {
                  return (
                    <Route
                      path={prop.path}
                      component={prop.component}
                      key={key}
                    />
                  );
                });
              })}
            </Switch>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={3}
            xl={2}
            style={{ marginTop: "75px" }}
          />
        </Grid>
      </div>
    );
  }
}

export default Documentation;
