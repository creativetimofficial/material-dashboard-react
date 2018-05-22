import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import { P } from "components";

const files = `material-dashboard-react
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   ├── img
    │   │   └── faces
    │   └── jss
    │       ├── material-dashboard-react
    │       └── material-dashboard-react.jsx
    ├── components
    │   ├── Cards
    │   │   ├── ChartCard.jsx
    │   │   ├── ProfileCard.jsx
    │   │   ├── RegularCard.jsx
    │   │   ├── StatsCard.jsx
    │   │   └── TasksCard.jsx
    │   ├── CustomButtons
    │   │   ├── Button.jsx
    │   │   └── IconButton.jsx
    │   ├── CustomInput
    │   │   └── CustomInput.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Grid
    │   │   └── ItemGrid.jsx
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   └── HeaderLinks.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   ├── Snackbar
    │   │   ├── Snackbar.jsx
    │   │   └── SnackbarContent.jsx
    │   ├── Table
    │   │   └── Table.jsx
    │   ├── Tasks
    │   │   └── Tasks.jsx
    │   ├── Typography
    │   │   ├── A.jsx
    │   │   ├── Danger.jsx
    │   │   ├── Info.jsx
    │   │   ├── Muted.jsx
    │   │   ├── P.jsx
    │   │   ├── Primary.jsx
    │   │   ├── Quote.jsx
    │   │   ├── Small.jsx
    │   │   ├── Success.jsx
    │   │   └── Warning.jsx
    │   └── index.js
    ├── layouts
    │   └── Dashboard
    │       └── Dashboard.jsx
    ├── routes
    │   ├── dashboard.jsx
    │   └── index.jsx
    ├── variables
    │   ├── charts.jsx
    │   └── general.jsx
    └── views
        ├── Dashboard
        │   └── Dashboard.jsx
        ├── Icons
        │   └── Icons.jsx
        ├── Maps
        │   └── Maps.jsx
        ├── Notifications
        │   └── Notifications.jsx
        ├── TableList
        │   └── TableList.jsx
        ├── Typography
        │   └── Typography.jsx
        └── UserProfile
            └── UserProfile.jsx`;

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1>Tutorial</h1>
        <h2>License</h2>
        <P>
          <b>MIT LICENSE</b>
        </P>
        {
          // eslint-disable-next-line
        }<P>Copyright (c) 2017{" "}<a href="https://creative-tim.com/" target="_blank">Creative Tim</a>.</P>
        <P>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </P>
        <P>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </P>
        <P>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </P>
        <h2>Getting started</h2>
        {
          // eslint-disable-next-line
        }<P><b>Material Dashboard React</b> is built on top of{" "}<a href="https://material-ui-next.com/" target="_blank">Material UI</a>.</P>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeJs Official Page
            </a>
          </li>
          {
            // eslint-disable-next-line
          }<li>Go to{" "}<a href="https://www.creative-tim.com/" target="_blank">creative tim website</a>{" "}and login into your account</li>
          {
            // eslint-disable-next-line
          }<li>Go to{" "}<a href="https://www.creative-tim.com/product/material-dashboard-react" target="_blank">material dashboard react</a>{" "}and press the download button (this will download onto your computer a zip file)</li>
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
                  href="https://github.com/facebookincubator/create-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to{" "}
            <code>http://localhost:3000</code>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              react
            </a>
          </li>
        </ul>
        <h2>Google Maps API key</h2>
        <P>Follow these steps to get an API key:</P>
        <ul>
          <li>
            Go to the{" "}
            <a
              href="https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google API Console
            </a>.
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
              href="https://developers.google.com/maps/documentation/javascript/usage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Usage Limits
            </a>{" "}
            for more information.
          </li>
        </ul>
        <P>
          After these steps navigate in your project to{" "}
          <code>views/Maps/Maps.jsx</code> and replace the{" "}
          <code>YOUR_KEY_HERE</code>, from line 29, with the given{" "}
          <code>API KEY</code>.
        </P>
        <P>
          For more information regarding google maps API KEY navigate to this{" "}
          <a
            href="https://developers.google.com/maps/documentation/javascript/get-api-key"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>.
        </P>
        <h2>Files and Folders structure</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {files}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Tutorial;
