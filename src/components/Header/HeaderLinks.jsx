import React from "react";
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Table from "components/Table/Table.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle";
import avatar from "assets/img/faces/marc.jpg";

import { Link } from 'react-router-dom';

class HeaderLinks extends React.Component {
  state = {
    open: {
      notif: false
    }
  };
  handleClick = mode => {
    let open = this.state.open;
    open[mode] = !open[mode];
    this.setState({ open });
    this.forceUpdate();
  };

  handleClose = mode => {
    let open = this.state.open;
    open[mode] = false;
    this.setState({ open });
    this.forceUpdate();
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
