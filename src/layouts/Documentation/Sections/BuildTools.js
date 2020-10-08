import React from "react";

import Table from "components/Table/Table.js";

class BuildTools extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Build tools
        </h1>
        <h3 id="change-brand-colors">
          <div>Change brand colors</div>
        </h3>
        <ul>
          <li>
            You will find all the branding colors inside{" "}
            <code className="highlighter-rouge">
              src/assets/jss/material-dashboard-react.js
            </code>
            .
          </li>
        </ul>
        <h3 id="compile-scss">
          <div>Available commands</div>
        </h3>
        <div className="bd-example">
          <Table
            tableHeaderColor="info"
            tableHead={["#", "Name", "Usage", "Description", "Read More"]}
            tableData={[
              [
                1,
                <code className="highlighter-rouge">install</code>,
                <code className="highlighter-rouge">npm install</code>,
                "This command installs a package, and any packages that it depends on.",
                <a
                  href="https://docs.npmjs.com/cli/install?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>,
              ],
              [
                2,
                <code className="highlighter-rouge">start</code>,
                <code className="highlighter-rouge">npm start</code>,
                "This will determinate the start of your development server.",
                <a
                  href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-start?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>,
              ],
              [
                3,
                <code className="highlighter-rouge">build</code>,
                <code className="highlighter-rouge">npm run build</code>,
                "This will create a build directory with a production build of your app.",
                <a
                  href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-build?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>,
              ],
              [
                4,
                <code className="highlighter-rouge">test</code>,
                <code className="highlighter-rouge">npm run test</code>,
                "Runs the test watcher in an interactive mode. (Note that we have not implemented any tests - this command is by default from the create-react-app)",
                <a
                  href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-test?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>,
              ],
              [
                5,
                <code className="highlighter-rouge">eject</code>,
                <code className="highlighter-rouge">npm run eject</code>,
                "This command will remove the single build dependency from your project. (We do not recommend using this command. Our product may not work after using this command.)",
                <a
                  href="https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject?ref=creativetim"
                  target="_blank"
                >
                  Read more
                </a>,
              ],
              [
                6,
                <code className="highlighter-rouge">install:clean</code>,
                <code className="highlighter-rouge">
                  npm run install:clean
                </code>,
                <div>
                  This command will remove the{" "}
                  <code className="highlighter-rouge">node_modules</code> folder
                  and{" "}
                  <code className="highlighter-rouge">package_lock.json</code>{" "}
                  file, and will install a fresh copy of them.
                </div>,
                "",
              ],
              [
                7,
                <code className="highlighter-rouge">lint:check</code>,
                <code className="highlighter-rouge">npm run lint:check</code>,
                "Checks for linting errors",
                <a href="https://eslint.org/?ref=creativetim" target="_blank">
                  Read more
                </a>,
              ],
              [
                8,
                <code className="highlighter-rouge">lint:fix</code>,
                <code className="highlighter-rouge">npm run lint:fix</code>,
                "Fixes linting errors (it may not solve all the linting errors)",
                <a href="https://eslint.org/?ref=creativetim" target="_blank">
                  Read more
                </a>,
              ],
              [
                9,
                <code className="highlighter-rouge">build-package-css</code>,
                <code className="highlighter-rouge">
                  npm run build-package
                </code>,
                "This will copy the css file from the assets folder in the dist folder in order for you to publish the dist folder to npm",
                "",
              ],
              [
                10,
                <code className="highlighter-rouge">build-package-css</code>,
                <code className="highlighter-rouge">
                  npm run build-package
                </code>,
                "This will prepare the product for npm distribution (Caution - the product was not thought as a npm distribution)",
                "",
              ],
            ]}
          />
        </div>
      </>
    );
  }
}

export default BuildTools;
