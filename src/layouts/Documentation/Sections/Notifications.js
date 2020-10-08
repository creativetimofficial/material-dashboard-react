import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
// @material-ui/core components
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Button from "components/CustomButtons/Button.js";

const styleCode = `import React from 'react';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

export default function StyleExample(){
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
`;

const stateCode = `import React from 'react';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

export default function StateExample(){
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
`;

const placeCode = `import React from 'react';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
//core components
import Snackbar from "components/Snackbar/Snackbar.js";
import Button from "components/CustomButtons/Button.js";

export default function Notifications() {
  const [open, setOpen] = React.useState(false);
  const [place, setPlace] = React.useState("tl");
  const [color, setColor] = React.useState("info");
  const showNotification = () => {
    if (open === false) {
      var rand = Math.floor(Math.random() * 5 + 1);
      var newColor;
      switch (rand) {
        case 1:
          newColor = "info";
          break;
        case 2:
          newColor = "success";
          break;
        case 3:
          newColor = "warning";
          break;
        case 4:
          newColor = "danger";
          break;
        case 5:
          newColor = "primary";
          break;
        default:
          break;
      }
      rand = Math.floor(Math.random() * 6 + 1);
      var newPlace;
      switch (rand) {
        case 1:
          newPlace = "tl";
          break;
        case 2:
          newPlace = "tc";
          break;
        case 3:
          newPlace = "tr";
          break;
        case 4:
          newPlace = "bl";
          break;
        case 5:
          newPlace = "bc";
          break;
        case 6:
          newPlace = "br";
          break;
        default:
          break;
      }
      setPlace(newPlace);
      setColor(newColor);
      setOpen(true);
      setTimeout(function() {
        setOpen(false);
      }, 6000);
    }
  };
  return (
    <div>
      <Button color="primary" onClick={() => showNotification()}>
        Show random generated position and color notification
      </Button>
      <Snackbar
        place={place}
        color={color}
        icon={AddAlert}
        message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
        open={open}
        closeNotification={() => setOpen(false)}
        close
      />
    </div>
  );
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

export default function Notifications() {
  const [open, setOpen] = React.useState(false);
  const [place, setPlace] = React.useState("tl");
  const [color, setColor] = React.useState("info");
  const showNotification = () => {
    if (open === false) {
      var rand = Math.floor(Math.random() * 5 + 1);
      var newColor;
      switch (rand) {
        case 1:
          newColor = "info";
          break;
        case 2:
          newColor = "success";
          break;
        case 3:
          newColor = "warning";
          break;
        case 4:
          newColor = "danger";
          break;
        case 5:
          newColor = "primary";
          break;
        default:
          break;
      }
      rand = Math.floor(Math.random() * 6 + 1);
      var newPlace;
      switch (rand) {
        case 1:
          newPlace = "tl";
          break;
        case 2:
          newPlace = "tc";
          break;
        case 3:
          newPlace = "tr";
          break;
        case 4:
          newPlace = "bl";
          break;
        case 5:
          newPlace = "bc";
          break;
        case 6:
          newPlace = "br";
          break;
        default:
          break;
      }
      setPlace(newPlace);
      setColor(newColor);
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
      }, 6000);
    }
  };
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
        {styleCode}
      </SyntaxHighlighter>
      <h2>States</h2>
      <SnackbarContent
        message={'INFO - This is a regular notification made with color="info"'}
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
        {stateCode}
      </SyntaxHighlighter>
      <h2>Places</h2>
      <Button color="primary" onClick={() => showNotification()}>
        Show random generated position and color notification
      </Button>
      <Snackbar
        place={place}
        color={color}
        icon={AddAlert}
        message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
        open={open}
        closeNotification={() => setOpen(false)}
        close
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {placeCode}
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
          href="https://material-ui-next.com/demos/snackbars/?ref=creativetim"
          target="_blank"
        >
          official material-ui documentation
        </a>
        .
      </p>
    </div>
  );
}
