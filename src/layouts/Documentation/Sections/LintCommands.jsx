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

const codeCheck = `npm run lint:check`;
const codeFix = `npm run lint:fix`;

class Styles extends React.Component {
  render() {
    return (
      <div>
        <h1>Lint</h1>
        <p>
          As per this request{" "}
          <a
            href="https://github.com/creativetimofficial/material-dashboard-react/issues/47?ref=creativetim"
            target="_blank"
          >
            issues/47
          </a>{" "}
          we've added some special commands so you can use lint inside our
          product.
        </p>
        <p>
          Manny thanks go to{" "}
          <a href="https://github.com/kdclaw3?ref=creativetim" target="_blank">
            Dee Clawson
          </a>{" "}
          for providing the necessary commands.
        </p>
        <p>These commands are as follows:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeCheck}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeFix}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Styles;
