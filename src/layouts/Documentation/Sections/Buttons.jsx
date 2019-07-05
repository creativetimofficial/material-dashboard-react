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
import Favorite from "@material-ui/icons/Favorite";

import Button from "components/CustomButtons/Button.jsx";

const importExamples = `import Button from "components/CustomButtons/Button.jsx";`;

const examples = `<Button type="button" color="primary">Primary</Button>
<Button type="button" color="info">Info</Button>
<Button type="button" color="success">Success</Button>
<Button type="button" color="danger">Danger</Button>
<Button type="button" color="warning">Warning</Button>
<Button type="button" color="rose">Rose</Button>`;

const importStyle = `import Favorite from "@material-ui/icons/Favorite";
import Button from "components/CustomButtons/Button.jsx";`;

const style = `<Button color="primary">Default</Button>
<Button color="primary" round>Round</Button>
<Button color="primary" round><Favorite /> With Icon</Button>
<Button justIcon round color="primary"><Favorite /></Button>
<Button color="transparent">Simple</Button>`;

const disabled = `<Button color="primary" disabled>Default</Button>
<Button color="primary" round disabled>Round</Button>`;

const buttonProp = `RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  // use this to pass the classes props from Material-UI
  muiClasses: PropTypes.object
};`;

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h1>Buttons</h1>
        <p>
          Use Material Dashboard's React custom button styles for actions in
          forms, dialogs, and more with support for multiple states, and more.
        </p>
        <p>
          You will find all of our restyled cards from material-ui in{" "}
          <code>src/components/CustomButtons</code>.
        </p>
        <h2>Examples</h2>
        <p>
          Material Dashboard React has changed the predefined button styles from
          Material UI, each serving its own semantic purpose, with a few extras
          thrown in for more control.
        </p>
        <Button type="button" color="primary">
          Primary
        </Button>
        <Button type="button" color="info">
          Info
        </Button>
        <Button type="button" color="success">
          Success
        </Button>
        <Button type="button" color="danger">
          Danger
        </Button>
        <Button type="button" color="warning">
          Warning
        </Button>
        <Button type="button" color="rose">
          Rose
        </Button>
        <SyntaxHighlighter language="jsx" style={prism}>
          {importExamples}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {examples}
        </SyntaxHighlighter>
        <h2>Style Buttons</h2>
        <Button color="primary">Default</Button>
        <Button color="primary" round>
          Round
        </Button>
        <Button color="primary" round>
          <Favorite /> With Icon
        </Button>
        <Button justIcon round color="primary">
          <Favorite />
        </Button>
        <Button color="transparent">Simple</Button>
        <SyntaxHighlighter language="jsx" style={prism}>
          {importStyle}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {style}
        </SyntaxHighlighter>
        <h2>Disabled state</h2>
        <p>
          Make buttons look inactive by adding the disabled boolean attribute to
          any <code>Button</code> element.
        </p>
        <Button color="primary" disabled>
          Default
        </Button>
        <Button color="primary" round disabled>
          Round
        </Button>
        <SyntaxHighlighter language="jsx" style={prism}>
          {disabled}
        </SyntaxHighlighter>
        <h2>Properties</h2>
        <h3>
          <code>Button</code>
        </h3>
        <SyntaxHighlighter language="jsx" style={prism}>
          {buttonProp}
        </SyntaxHighlighter>
        <h2>Material UI Buttons</h2>
        <p>
          For more props and buttons please check out the{" "}
          <a
            href="https://material-ui-next.com/demos/buttons/?ref=creativetim"
            target="_blank"
          >
            material-ui buttons section
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Buttons;
