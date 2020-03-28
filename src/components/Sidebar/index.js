/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link, useRouteMatch} from 'react-router-dom'
// core components
import AdminNavbarLinks from "components/Navbars/DashboardNavbarLinks";
import styles from "assets/jss/material-dashboard-react/components/sidebarStyle";

const useStyles = makeStyles(styles);

const SidebarLink = ({
  name,
  to,
  color,
  icon: LinkIcon
}) =>{
  const classes = useStyles()
  const isActive = useRouteMatch(to)
  const listItemClasses = classNames({
    [" " + classes[color]]: isActive
  });
  const whiteFontClasses = classNames({
    [" " + classes.whiteFont]: isActive
  });

  return (
    <NavLink
      to={to}
      className={classes.item}
      activeClassName="active"
    >
      <ListItem button className={classes.itemLink + listItemClasses}>
        <LinkIcon
          className={classNames(classes.itemIcon, whiteFontClasses)}
        />
        <ListItemText
          primary={name}
          className={classNames(classes.itemText, whiteFontClasses)}
          disableTypography={true}
        />
      </ListItem>
    </NavLink>
  )

}

export default function Sidebar(props) {
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  const { color, logo, image, logoText, routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((navItem, key) => (
        <SidebarLink key={key} name={navItem.name} to={navItem.to} icon={navItem.icon} color={color} />
      ))}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <Link
        to="/"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </Link>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}><AdminNavbarLinks />
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
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
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
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};
