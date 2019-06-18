import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// @material-ui/core components
// @material-ui/icons
//core components

const restyledComponents = `components
├── CustomButtons
│   ├── Button.jsx
├── CustomInput
│   └── CustomInput.jsx
├── Footer
│   └── Footer.jsx
├── Header
│   ├── Header.jsx
│   └── HeaderLinks.jsx
├── Sidebar
│   └── Sidebar.jsx
├── Snackbar
│   ├── Snackbar.jsx
│   └── SnackbarContent.jsx
├── Table
│   └── Table.jsx
├── Tasks
│   └── Tasks.jsx
└── Typography
    ├── Danger.jsx
    ├── Info.jsx
    ├── Muted.jsx
    ├── Primary.jsx
    ├── Quote.jsx
    ├── Success.jsx
    └── Warning.jsx`;

class Styles extends React.Component {
  render() {
    return (
      <div>
        <h1>Styles</h1>
        <p>
          Like our friends from{" "}
          <a
            href="https://material-ui-next.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material UI
          </a>
          , we've used JSS syntax to style (restyle) the material ui components.
        </p>
        <p>
          A useful link about JSS is{" "}
          <a
            href="https://github.com/cssinjs/jss"
            target="_blank"
            rel="noopener noreferrer"
          >
            this one here
          </a>
          .
        </p>
        <p>
          Material UI offers you 7 ways to override their styles, and as said
          above, we've decided to go with the third option (
          <a
            href="https://material-ui-next.com/guides/interoperability/#react-jss"
            target="_blank"
            rel="noopener noreferrer"
          >
            this one here
          </a>
          ).
        </p>
        <p>
          All of the restyled components can be found in{" "}
          <code>src/components</code>.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {restyledComponents}
        </SyntaxHighlighter>
        <p>
          If you go to any of our components you will see that somewhere at the
          beginning of the file we import <code>withStyles</code> from{" "}
          <code>material-ui</code>, then we import from{" "}
          <code>scr/assets/jss/*</code> the correspondig style for that
          component and at the end of the file, we export that component's class
          with the <code>withStyles</code> function so that the imported style
          overrides the <code>material-ui</code> style.
        </p>
        <p>
          For a better way of understanding this variables, please take a look
          inside the <code>src/assets/jss/*</code>.
        </p>
        <p>These styling files are split between where we use them:</p>
        <ul>
          <li>
            <code>src/assets/jss/material-dashboard-react/components/</code> are
            styles used for <code>src/components/</code>
          </li>
          <li>
            <code>src/assets/jss/material-dashboard-react/layouts/</code> are
            styles used for <code>src/layouts/</code>
          </li>
          <li>
            <code>src/assets/jss/material-dashboard-react/views/</code> are
            styles used for <code>src/views/</code>
          </li>
          <li>
            <code>
              src/assets/jss/material-dashboard-react/checkboxAdnRadioStyle.jsx
            </code>{" "}
            are styles used for <code>checkboxes</code> and <code>radios</code>,
            which are beeing used in more than one page (sometimes this styles
            are beeing imported in the above styles)
          </li>
          <li>
            <code>
              src/assets/jss/material-dashboard-react/tooltipStyle.jsx
            </code>{" "}
            are styles used for <code>tooltips</code>, which are beeing used in
            more than one page (sometimes this styles are beeing imported in the
            above styles)
          </li>
          <li>
            <code>src/assets/jss/material-dashboard-react.jsx</code> are
            variables that are beeing used in any of the above styles
          </li>
        </ul>
      </div>
    );
  }
}

export default Styles;
