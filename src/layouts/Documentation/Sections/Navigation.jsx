import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

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
          <code>src/components/Header/Header.jsx</code>. In this component there
          is just the structure of the navbar. The links can be found in{" "}
          <code>src/components/Header/HeaderLinks.jsx</code>. We've done this
          because on responsive we want both the links from <code>Navbar</code>{" "}
          and those from <code>Sidebar</code> components to be displayed.
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
          <a
            href="https://material-ui-next.com/demos/app-bar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            official material-ui documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Navigation;
