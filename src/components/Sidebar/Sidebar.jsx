import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle.jsx";

const Sidebar = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  const { classes, color, logo, image, logoText, routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        if (prop.redirect) return null;
        var activePro = " ";
        var listItemClasses;
        if(prop.path === "/upgrade-to-pro"){
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.path)
        });
        return (
          <NavLink
            to={prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                <prop.icon />
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                className={classes.itemText + whiteFontClasses}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a href="https://www.creative-tim.com" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <HeaderLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
