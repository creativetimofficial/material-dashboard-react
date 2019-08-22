/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

// @material-ui/core components
// @material-ui/icons
//core components

const headerProp = `Header.propTypes = {
    color: PropTypes.oneOf(["primary","info","success","warning","danger"])
};`;

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <h1>Navigation</h1>
        <p>The classic Material UI Appbar was restyled.</p>
        <p>
          You will find this component in{" "}
          <code>src/components/Navbars/Navbar.js</code>. In this component there
          is just the structure of the navbar. The links can be found in{" "}
          <code>src/components/Navbars/AdminNavbarLinks.js</code>. We've done
          this because on responsive we want both the links from{" "}
          <code>Navbar</code> and those from <code>Sidebar</code> components to
          be displayed.
        </p>
        <p>
          You can choose between 5 colors by using the <code>color</code>{" "}
          property.
        </p>
        <p>If this property is not set, then the Appbar will be transparent.</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {headerProp}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please check out the{" "}
          <a href="https://material-ui-next.com/demos/app-bar/" target="_blank">
            official material-ui documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Navigation;
