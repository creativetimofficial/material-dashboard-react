import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// @material-ui/core components
// @material-ui/icons
//core components

const restyledComponents = `components
  ├── Card
  │   ├── Card.js
  │   ├── CardAvatar.js
  │   ├── CardBody.js
  │   ├── CardFooter.js
  │   ├── CardHeader.js
  │   └── CardIcon.js
  ├── CustomButtons
  │   └── Button.js
  ├── CustomInput
  │   └── CustomInput.js
  ├── CustomTabs
  │   └── CustomTabs.js
  ├── FixedPlugin
  │   └── FixedPlugin.js
  ├── Footer
  │   └── Footer.js
  ├── Grid
  │   ├── GridContainer.js
  │   └── GridItem.js
  ├── Navbars
  │   ├── AdminNavbarLinks.js
  │   ├── Navbar.js
  │   └── RTLNavbarLinks.js
  ├── Sidebar
  │   └── Sidebar.js
  ├── Snackbar
  │   ├── Snackbar.js
  │   └── SnackbarContent.js
  ├── Table
  │   └── Table.js
  ├── Tasks
  │   └── Tasks.js
  └── Typography
      ├── Danger.js
      ├── Info.js
      ├── Muted.js
      ├── Primary.js
      ├── Quote.js
      ├── Success.js
      └── Warning.js`;

class Styles extends React.Component {
  render() {
    return (
      <div>
        <h1>Styles</h1>
        <p>
          Like our friends from{" "}
          <a
            href="https://material-ui-next.com/?ref=creativetim"
            target="_blank"
          >
            Material UI
          </a>
          , we've used JSS syntax to style (restyle) the material ui components.
        </p>
        <p>
          A useful link about JSS is{" "}
          <a
            href="https://github.com/cssinjs/jss?ref=creativetim"
            target="_blank"
          >
            this one here
          </a>
          .
        </p>
        <p>
          We've decided to use the <code>makeStyles</code> function from
          Material-UI to override some of thier styles. This is a React HOOK
          functions, which means that it can only be called from another React
          HOOK or a simple function. Read more about it{" "}
          <a
            href="https://material-ui.com/styles/api/#makestyles-styles-options-hook"
            target="_blank"
          >
            here
          </a>
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
          beginning of the file we import <code>makeStyles</code> from{" "}
          <code>material-ui</code>, then we import from{" "}
          <code>scr/assets/jss/*</code> the correspondig style for that
          component and after these imports, we use the <code>makeStyles</code>{" "}
          function alongside our styles to compile them to jss from javascript
          objects.
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
              src/assets/jss/material-dashboard-react/checkboxAdnRadioStyle.js
            </code>{" "}
            are styles used for <code>checkboxes</code> and <code>radios</code>,
            which are beeing used in more than one page (sometimes this styles
            are beeing imported in the above styles)
          </li>
          <li>
            <code>src/assets/jss/material-dashboard-react/tooltipStyle.js</code>{" "}
            are styles used for <code>tooltips</code>, which are beeing used in
            more than one page (sometimes this styles are beeing imported in the
            above styles)
          </li>
          <li>
            <code>src/assets/jss/material-dashboard-react.js</code> are
            variables that are beeing used in any of the above styles
          </li>
        </ul>
      </div>
    );
  }
}

export default Styles;
