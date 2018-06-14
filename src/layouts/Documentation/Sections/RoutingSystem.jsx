import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// @material-ui/core components
// @material-ui/icons
//core components

class RoutingSystem extends React.Component {
  render() {
    return (
      <div>
        <h1>Routing System</h1>
        <p>
          For a better and easier way we've decided to create dynamic routes.
          You will find all our demo routes in:
        </p>
        <ul>
          <li>
            <code>src/routes/index.jsx</code>{" "}
            <i>
              (these are the routes for the whole project - it contains only one
              route - the route to our demo app)
            </i>
          </li>
          <li>
            <code>src/routes/dashboard.jsx</code>{" "}
            <i>
              (these are the routes for all of the Dashboard views -{" "}
              <code>src/views</code>)
            </i>
          </li>
        </ul>
        <p>Let's a look at each one of them.</p>
        <h3>
          <code>src/routes/index.jsx</code>
        </h3>
        <p>
          As said above, this is the route for all our app, it contains only one
          route. We've used this thinking you may need to have two apps running
          on the same server.
        </p>
        <p>
          This route is rendered in <code>src/index.js</code> (see line 13,
          lines 18 to 23).
        </p>
        <p>
          You will see that we've used <code>react-router-dom</code>'s
          components to create this route, using <code>Router</code>,{" "}
          <code>Route</code> and <code>Switch</code> as expected, just that
          we've used a dynamic approach.
        </p>
        <p>
          You can add as many routes you would like in{" "}
          <code>src/routes/index.jsx</code> to create as many app's as you wish
          and they will all be rendered as <code>react-router-dom</code>'s
          components.
        </p>
        <h3>
          <code>src/routes/dashboard.jsx</code>
        </h3>
        <p>
          These are the routes for the all pages that appear in the Dashboard
          (these pages can be found in <code>src/views/*</code>).
        </p>
        <p>
          You will see these routes beeing used/rendered in{" "}
          <code>src/layouts/Dashboard/Dashboard.jsx</code> (see line 16, lines
          77 to 89, line 82 - used to create a <code>Redirect</code> component,
          line 85 - used to create a <code>Route</code> component).
        </p>
        <p>
          You will see that we've used <code>react-router-dom</code>'s
          components to create these routes, using <code>Route</code>,{" "}
          <code>Switch</code> and <code>Redirect</code> as expected, just that
          we've used a dynamic approach.
        </p>
        <p>
          Beside beeing used to create the <code>Dashboard</code> routes, these
          have been also used to create the links that appear in all the
          Dashboard pages navbars brand (<code>Header</code> component) and in
          the <code>Sidebar</code> component as well. If you see lines 59 and
          70, you will see that the routes are passed in this two components{" "}
          <code>Sidebar</code> (lines 28 to 36 and lines 15 to 17),{" "}
          <code>Header</code> (lines 47 and 15 to 39).
        </p>
        <h2>Legend</h2>
        <ul>
          <li />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`{ redirect: true, path: "/", to: "/dashboard" }`}
          </SyntaxHighlighter>
          <ul>
            <li>
              <code>redirect</code> (used to tell our demo app components this
              is a redirect)
            </li>
            <li>
              <code>path</code> (which pathname to be redirected)
            </li>
            <li>
              <code>pathTo</code> (where to be redirected)
            </li>
          </ul>
          <li />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`{ path: "/notifications", sidebarName: "Notifications", navbarName: "Notifications", icon: Notifications, component: NotificationsPage },`}
          </SyntaxHighlighter>
          <ul>
            <li>
              <code>path</code> (path for your route - this will be seen in the
              browser url input)
            </li>
            <li>
              <code>sidebarName</code> (name of your route - this will appear in
              the <code>Sidebar</code> component)
            </li>
            <li>
              <code>navbarName</code> (name of your route - this will appear in
              the <code>Header</code> component)
            </li>
            <li>
              <code>icon</code> (icon to be displayed alongside with links in{" "}
              <code>Sidebar</code> component)
            </li>
            <li>
              <code>component</code> (this is the page to be rendered)
            </li>
          </ul>
        </ul>
        <h2>
          <code>Notice</code>
        </h2>
        <p>
          Because our routes are arrays of objects, and each route is an object,
          you can add what props you want in our routes and do what you want
          with them.
        </p>
        <p>
          For example, if you want to "hide" a route (you want it to not be
          displayed in sidebar), you could add a prop like{" "}
          <code>invisible: true</code> and then in sidebar add an if statement
          inside the <code>map</code> function of ours and do like this:
          <SyntaxHighlighter language="jsx" style={prism}>
            {`if(prop.invisible) return null;`}
          </SyntaxHighlighter>
        </p>
      </div>
    );
  }
}

export default RoutingSystem;
