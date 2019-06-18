import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// @material-ui/core components
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Button from "components/CustomButtons/Button.jsx";

const style = `import React from 'react';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";

class StyleExample extends React.Component{
    render(){
        return(
            <div>
                <br />
                <SnackbarContent message={'This is a plain notification'} />
                <br />
                <SnackbarContent message={'This is a notification with close button.'} close/>
                <br />
                <SnackbarContent
                    message={"This is a notification with close button and icon."}
                    close
                    icon={AddAlert}
                />
                <br />
                <SnackbarContent
                    message={"This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."}
                    close
                    icon={AddAlert}
                />
                <br />
            </div>
        );
    }
}
`;

const state = `import React from 'react';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";

class StateExample extends React.Component{
    render(){
        return(
            <div>
                <SnackbarContent message={'INFO - This is a regular notification made with color="info"'} close color="info"/>
                <br />
                <SnackbarContent message={'SUCCESS - This is a regular notification made with color="success"'} close color="success"/>
                <br />
                <SnackbarContent message={'WARNING - This is a regular notification made with color="warning"'} close color="warning"/>
                <br />
                <SnackbarContent message={'DANGER - This is a regular notification made with color="danger"'} close color="danger"/>
                <br />
                <SnackbarContent message={'PRIMARY - This is a regular notification made with color="primary"'} close color="primary"/>
                <br />
            </div>
        );
    }
}
`;

const place = `import React from 'react';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Button from "components/CustomButtons/Button.jsx";

class PlaceExample extends React.Component{
    state = {
        open: false,
        place: 'tl'
    }
    showNotification(){
        var color = Math.floor((Math.random() * 5) + 1);
        var type;
        switch (color) {
            case 1:
                type = 'info';
                break;
            case 2:
                type = 'success';
                break;
            case 3:
                type = 'warning';
                break;
            case 4:
                type = 'danger';
                break;
            case 5:
                type = 'primary';
                break;
            default:
                break;
        };
        color = Math.floor((Math.random() * 6) + 1);
        var place;
        switch (color) {
            case 1:
                place = 'tl';
                break;
            case 2:
                place = 'tc';
                break;
            case 3:
                place = 'tr';
                break;
            case 4:
                place = 'bl';
                break;
            case 5:
                place = 'bc';
                break;
            case 6:
                place = 'br';
                break;
            default:
                break;
        };
        this.setState({open: true, place: place, color: type});
        setTimeout(function(){
            this.setState({open: false});
        }.bind(this),6000);
    }
    render(){
        return(
            <div>
                <Button color="primary" onClick={() => this.showNotification()}>Show random generated position and color notification</Button>
                <Snackbar
                    place={this.state.place}
                    color={this.state.color}
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.open}
                    closeNotification={() => this.setState({open:false})}
                    close
                />
            </div>
        );
    }
}`;

const snackbarContent = `SnackbarContent.propTypes = {
    message: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['info','success','warning','danger','primary']),
    close: PropTypes.bool,
    icon: PropTypes.func,
};`;
const snackbar = `Snackbar.propTypes = {
    message: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['info','success','warning','danger','primary']),
    close: PropTypes.bool,
    icon: PropTypes.func,
    place: PropTypes.oneOf(['tl','tr','tc','br','bl','bc']),
    open: PropTypes.bool
};`;

class Notifications extends React.Component {
  state = {
    open: false,
    place: "tl"
  };
  showNotification() {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "info";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "warning";
        break;
      case 4:
        type = "danger";
        break;
      case 5:
        type = "primary";
        break;
      default:
        break;
    }
    color = Math.floor(Math.random() * 6 + 1);
    var place;
    switch (color) {
      case 1:
        place = "tl";
        break;
      case 2:
        place = "tc";
        break;
      case 3:
        place = "tr";
        break;
      case 4:
        place = "bl";
        break;
      case 5:
        place = "bc";
        break;
      case 6:
        place = "br";
        break;
      default:
        break;
    }
    this.setState({ open: true, place: place, color: type });
    setTimeout(
      function() {
        this.setState({ open: false });
      }.bind(this),
      6000
    );
  }
  render() {
    return (
      <div>
        <h1>Notifications / Snackbars</h1>
        <p>
          We restyled the classic Material UI Snackbar and gave it a more
          attractive look.
        </p>
        <h2>Style</h2>
        <br />
        <SnackbarContent message={"This is a plain notification"} />
        <br />
        <SnackbarContent
          message={"This is a notification with close button."}
          close
        />
        <br />
        <SnackbarContent
          message={"This is a notification with close button and icon."}
          close
          icon={AddAlert}
        />
        <br />
        <SnackbarContent
          message={
            "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
          }
          close
          icon={AddAlert}
        />
        <br />
        <SyntaxHighlighter language="jsx" style={prism}>
          {style}
        </SyntaxHighlighter>
        <h2>States</h2>
        <SnackbarContent
          message={
            'INFO - This is a regular notification made with color="info"'
          }
          close
          color="info"
        />
        <br />
        <SnackbarContent
          message={
            'SUCCESS - This is a regular notification made with color="success"'
          }
          close
          color="success"
        />
        <br />
        <SnackbarContent
          message={
            'WARNING - This is a regular notification made with color="warning"'
          }
          close
          color="warning"
        />
        <br />
        <SnackbarContent
          message={
            'DANGER - This is a regular notification made with color="danger"'
          }
          close
          color="danger"
        />
        <br />
        <SnackbarContent
          message={
            'PRIMARY - This is a regular notification made with color="primary"'
          }
          close
          color="primary"
        />
        <br />
        <SyntaxHighlighter language="jsx" style={prism}>
          {state}
        </SyntaxHighlighter>
        <h2>Places</h2>
        <Button color="primary" onClick={() => this.showNotification()}>
          Show random generated position and color notification
        </Button>
        <Snackbar
          place={this.state.place}
          color={this.state.color}
          icon={AddAlert}
          message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
          open={this.state.open}
          closeNotification={() => this.setState({ open: false })}
          close
        />
        <SyntaxHighlighter language="jsx" style={prism}>
          {place}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <SyntaxHighlighter language="jsx" style={prism}>
          {snackbarContent}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {snackbar}
        </SyntaxHighlighter>
        <p>
          Beside these props, you can check out the{" "}
          <a
            href="https://material-ui-next.com/demos/snackbars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            official material-ui documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Notifications;
