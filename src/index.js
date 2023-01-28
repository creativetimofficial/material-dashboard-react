/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MaterialUIControllerProvider } from "context";
import App from "App";
import store from "./Redux/store";
// import AuthProviderPriceMatch from "./authProvider";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
// console.log("auth0 details", domain, clientId);

// // Material Dashboard 2 React Context Provider
// {/* <AuthProviderPriceMatch
// domain={process.env.REACT_APP_AUTH0_DOMAIN}
// clientId={process.env.REACT_APP_CLIENT_ID}
// redirectUri={window.location.origin}
// >
//   </AuthProviderPriceMatch>> */}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//
