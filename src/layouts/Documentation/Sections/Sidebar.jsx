import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// @material-ui/core components
// @material-ui/icons
//core components

const sidebarDep = `import Sidebar from 'components/Sidebar/Sidebar.jsx';
import appRoutes from 'routes/app.jsx';
import image from 'assets/img/sidebar-1.jpg';
import logo from 'assets/img/reactlogo.png';`;
const sidebarCode = `this.state = {
    mobileOpen: false,
};

handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
};`;
const sidebar = `<Sidebar
    routes={appRoutes}
    logoText={"Creative Tim"}
    logo={logo}
    image={image}
    handleDrawerToggle={this.handleDrawerToggle}
    open={this.state.mobileOpen}
    color="blue"
    {...rest}
/>`;
class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h1>Sidebar / Drawer</h1>
        <p>We've restyled the classic Material UI Drawer.</p>
        <p>
          It comes in 5 different colors (just pass the <code>color</code> prop
          to it with one of the <code>purple</code>, <code>blue</code>,{" "}
          <code>green</code>, <code>orange</code>, <code>red</code>), option to
          set a background image (<code>image</code>), a option to set the brand
          text (<code>logoText</code>), a option to set the logo image (
          <code>logo</code>) and a option to set the routes / links to be
          displayed in it (<code>routes</code>).
        </p>
        <p>
          For more info about the links, please read the{" "}
          <Link to={"/documentation/routing-system"}>
            routing system section
          </Link>
          .
        </p>
        <h2>Example of code</h2>
        <p>
          This is the actual code for the <code>Sidebar</code> in our demo app.
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {sidebarDep}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {sidebarCode}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {sidebar}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please check out the{" "}
          <a
            href="https://material-ui-next.com/demos/drawers/?ref=creativetim"
            target="_blank"
          >
            official material-ui documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Sidebar;
