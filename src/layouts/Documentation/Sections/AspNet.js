/*eslint-disable*/
import React from "react";
// @material-ui/core components
// @material-ui/icons
//core components

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <h1>Tutorial</h1>
        <h2>Quick Start</h2>
        <p>Quick start options:</p>
        <ul>
          <li>
            Download and install{" "}
            <a href="https://docs.docker.com/desktop/" target="_blank">
              Docker
            </a>
          </li>
          <li>
            Clone the repo:{" "}
            <code>
              git clone
              https://github.com/creativetimofficial/material-dashboard-react.git
            </code>
            .
          </li>
          <li>
            <a href="https://github.com/creativetimofficial/material-dashboard-react/archive/master.zip">
              Download from Github
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.creative-tim.com/product/material-dashboard-react"
              target="_blank"
            >
              Download from Creative Tim
            </a>
            .
          </li>
          <li>
            From the project root folder run{" "}
            <code>docker-compose up --build</code>. Note that the first time you
            run this the images will build.
          </li>
          <li>
            Once docker-compose has finished, you will find the projects on the
            following URLs:
            <ul>
              <li>
                <a href="http://localhost:3000/admin/dashboard" target="_blank">
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:5000/.well-known/openid-configuration"
                  target="_blank"
                >
                  Identity Server
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h2>Usage</h2>
        <p>
          You now have 2 applications running consisting of a React front end
          and application an Identity Server (IDS) based on C# and .Net Core.
          This implentation follow the resource owner password flow but can be
          modified to support others.
        </p>
        <p>The integration gives you 3 features:</p>
        <ol>
          <li>
            Login. The IDS has 2 default logins to get you started:
            <ul>
              <li>
                <pre>Username: alice Password: Pass123$</pre>
              </li>
              <li>
                <pre>Username: bob Password: Pass123$</pre>
              </li>
            </ul>
          </li>
          <li>Register. This registers a new user in IDS</li>
          <li>User Profile. Update profile and change password.</li>
        </ol>
        <p>
          If you wish to change any of the settings around authentications,
          please refer to the following files:
        </p>
        <ul>
          <li>
            <code>\React\src\services\oauth.js</code>
          </li>
          <li>
            <code>\IdentityServer\Config.cs</code>
          </li>
          <li>
            <code>\IdentityServer\Startup.cs</code>
          </li>
          <li>
            <code>\IdentityServer\Quickstart\Account\AccountOptions.cs</code>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tutorial;
