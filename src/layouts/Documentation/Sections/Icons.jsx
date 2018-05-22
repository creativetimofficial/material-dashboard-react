import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import { P } from "components";

class Icons extends React.Component {
  render() {
    return (
      <div>
        <h1>Icons</h1>
        <h2>Icons font</h2>
        <P>
          In order to use the font <code>Icon</code> component, or to use icon
          names (ligatures) directly in components that support them, you must
          first add the{" "}
          <a
            href="https://material.io/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material icons font
          </a>. Here are some{" "}
          <a
            href="https://google.github.io/material-design-icons/#icon-font-for-the-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            instructions
          </a>{" "}
          on how to do so.
        </P>
        <P>You would use them like:</P>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`<i className="material-icons">name_of_the_icon</i>`}</SyntaxHighlighter>
        <P>or you could use them with material-ui like so:</P>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { Icon } from 'material-ui';`}</SyntaxHighlighter>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`<Icon>name_of_the_icon</Icon>`}</SyntaxHighlighter>
        <h2>SVG Icons</h2>
        <P>
          In order to use prebuilt SVG Material icons, such as those found in
          the component demos you must first install the{" "}
          <a
            href="https://www.npmjs.com/package/@material-ui/icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            @material-ui/icons
          </a>{" "}
          package:
        </P>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`npm install --save @material-ui/icons`}</SyntaxHighlighter>
        <P>Then you would use them like so:</P>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import { NameOfTheIcon } from '@material-ui/icons';`}</SyntaxHighlighter>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`<NameOfTheIcon />`}</SyntaxHighlighter>
      </div>
    );
  }
}

export default Icons;
