/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
// @material-ui/core components
// @material-ui/icons
//core components

const files = `material-dashboard-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── bower.json
├── gulpfile.js
├── jsconfig.json
├── package.json
├── documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   │   └── material-dashboard-react.css
    │   ├── github
    │   │   ├── md-react.gif
    │   │   └── react.svg
    │   ├── img
    │   │   └── faces
    │   └── jss
    │       ├── material-dashboard-react
    │       │   ├── components
    │       │   ├── layouts
    │       │   └── views
    │       └── material-dashboard-react.js
    ├── components
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardAvatar.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   ├── CardHeader.js
    │   │   └── CardIcon.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Navbars
    │   │   ├── AdminNavbarLinks.js
    │   │   ├── Navbar.js
    │   │   └── RTLNavbarLinks.js
    │   ├── Sidebar
    │   │   └── Sidebar.js
    │   ├── Snackbar
    │   │   ├── Snackbar.js
    │   │   └── SnackbarContent.js
    │   ├── Table
    │   │   └── Table.js
    │   ├── Tasks
    │   │   └── Tasks.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Success.js
    │       └── Warning.js
    ├── layouts
    │   ├── Admin.js
    │   └── RTL.js
    ├── variables
    │   ├── charts.js
    │   └── general.js
    └── views
        ├── Dashboard
        │   └── Dashboard.js
        ├── Icons
        │   └── Icons.js
        ├── Maps
        │   └── Maps.js
        ├── Notifications
        │   └── Notifications.js
        ├── RTLPage
        │   └── RTLPage.js
        ├── TableList
        │   └── TableList.js
        ├── Typography
        │   └── Typography.js
        ├── UpgradeToPro
        │   └── UpgradeToPro.js
        └── UserProfile
            └── UserProfile.js`;

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1>Tutorial</h1>
        <h2>License</h2>
        <p>
          <b>MIT LICENSE</b>
        </p>
        <p>
          Copyright (c) {new Date().getFullYear()}{" "}
          <a href="https://creative-tim.com/?ref=creativetim" target="_blank">
            Creative Tim
          </a>
          .
        </p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <h2>Getting started</h2>
        <p>
          <b>Material Dashboard React</b> is built on top of{" "}
          <a
            href="https://material-ui-next.com/?ref=creativetim"
            target="_blank"
          >
            Material UI
          </a>{" "}
          using{" "}
          <a
            href="https://github.com/facebook/create-react-app?ref=creativetim"
            target="_blank"
          >
            create-react-app
          </a>
          .
        </p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a href="https://nodejs.org/en/?ref=creativetim" target="_blank">
              NodeJs Official Page
            </a>
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/?ref=mdr-tutorial-section-docs"
              target="_blank"
            >
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          <li>
            Go to{" "}
            <a
              href="https://www.creative-tim.com/product/material-dashboard-react?ref=mdr-tutorial-section-docs"
              target="_blank"
            >
              material dashboard react
            </a>{" "}
            and press the download button (this will download onto your computer
            a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm start`}</SyntaxHighlighter>
            If you have an error something containing
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`Module not found`}</SyntaxHighlighter>
            You should check if in your root project folder you have a file
            named <code>.env</code>.
            <br />
            If you do not have it, then create it and add this line in it:{" "}
            <code>NODE_PATH=./src</code>
            <br />
            If that does not work, you need to do the following
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install --g cross-env`}</SyntaxHighlighter>
            then change the <code>script</code> inside <code>package.json</code>{" "}
            by adding <code>NODE_PATH=./src</code> inside it. For example, the
            start script would be changed from
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "react-scripts start",`}</SyntaxHighlighter>
            to
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "NODE_PATH=./src react-scripts start",`}</SyntaxHighlighter>
          </li>
          <li>
            (Optional) You can create a new react application like this
            <ul>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm install -g create-react-app`}</SyntaxHighlighter>
              </li>
              <li>Go to the folder where you want to create your app</li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`create-react-app your-app-name`}</SyntaxHighlighter>
              </li>
              <li>
                Navigate to <code>your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                More information →{" "}
                <a
                  href="https://github.com/facebookincubator/create-react-app?ref=creativetim"
                  target="_blank"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to <code>http://localhost:3000</code>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html?ref=creativetim"
              target="_blank"
            >
              react
            </a>
          </li>
        </ul>
        <p>
          If you have a warning of <code>props.history</code> being{" "}
          <code>undefined</code>, please checkthis{" "}
          <a
            href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70?ref=creativetim"
            target="_blank"
          >
            link here
          </a>{" "}
          for a solution.
        </p>
        <h2>Google Maps API key</h2>
        <p>Follow these steps to get an API key:</p>
        <ul>
          <li>
            Go to the{" "}
            <a
              href="https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&pli=1&ref=creativetim"
              target="_blank"
            >
              Google API Console
            </a>
            .
          </li>
          <li>Create or select a project.</li>
          <li>Click Continue to enable the API and any related services.</li>
          <li>On the Credentials page, get an API key.</li>
          <li>
            Note: If you have an existing unrestricted API key, or a key with
            browser restrictions, you may use that key.
          </li>
          <li>
            From the dialog displaying the API key, select Restrict key to set a
            browser restriction on the API key.
          </li>
          <li>
            In the Key restriction section, select HTTP referrers (web sites),
            then follow the on-screen instructions to set referrers.
          </li>
          <li>
            (Optional) Enable billing. See{" "}
            <a
              href="https://developers.google.com/maps/documentation/javascript/usage?ref=creativetim"
              target="_blank"
            >
              Usage Limits
            </a>{" "}
            for more information.
          </li>
        </ul>
        <p>
          After these steps navigate in your project to{" "}
          <code>views/Maps/Maps.js</code> and replace the{" "}
          <code>YOUR_KEY_HERE</code>, from line 29, with the given{" "}
          <code>API KEY</code>.
        </p>
        <p>
          For more information regarding google maps API KEY navigate to this{" "}
          <a
            href="https://developers.google.com/maps/documentation/javascript/get-api-key?ref=creativetim"
            target="_blank"
          >
            link
          </a>
          .
        </p>
        <h2>Files and Folders structure</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {files}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Tutorial;
