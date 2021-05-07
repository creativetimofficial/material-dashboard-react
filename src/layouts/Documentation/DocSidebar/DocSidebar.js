/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles, List, ListItem, ListItemText } from "@material-ui/core";

const style = (theme) => ({
  list: {
    overflowY: "auto",
    maxHeight: "calc(100vh - 4rem)",
    paddingTop: "40px",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingBottom: ".25rem",
    borderRight: "1px solid rgba(0,0,0,.1)",
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      paddingTop: "15px",
    },
  },
  innerList: {
    display: "block",
    paddingLeft: "0px",
    flexWrap: "wrap",
    marginBottom: "18px",
    listStyle: "none",
  },
  listItemText: {
    display: "block",
    color: "rgba(0,0,0,.65)",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "300",
    lineHeight: "1.5em",
  },
  listItemTextGroup: {
    fontWeight: "500",
    color: "rgba(0,0,0,.85)",
    fontSize: "1rem",
  },
  active: {
    fontWeight: "500",
    color: "rgba(0,0,0,.85)",
    backgroundColor: "transparent",
  },
  navLink: {
    textDecoration: "none",
  },
  listItem: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem",
  },
  innerListItem: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem",
  },
});

class DocSidebar extends React.Component {
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  render() {
    const { classes, routes } = this.props;
    return (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) return null;
          return (
            <div key={key}>
              <NavLink
                to={prop.path}
                activeClassName="active"
                className={classes.navLink}
              >
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary={prop.name}
                    disableTypography={true}
                    className={
                      classes.listItemText +
                      " " +
                      classes.listItemTextGroup +
                      " " +
                      (this.activeRoute(prop.path) ? classes.active : "")
                    }
                  />
                </ListItem>
              </NavLink>
              <List className={classes.innerList}>
                {prop.routes.map((prop, key) => {
                  return (
                    <NavLink
                      to={prop.path}
                      activeClassName="active"
                      key={key}
                      className={classes.navLink}
                    >
                      <ListItem className={classes.innerListItem}>
                        <ListItemText
                          primary={prop.name}
                          disableTypography={true}
                          className={
                            classes.listItemText +
                            " " +
                            (this.activeRoute(prop.path) ? classes.active : "")
                          }
                        />
                      </ListItem>
                    </NavLink>
                  );
                })}
              </List>
            </div>
          );
        })}
      </List>
    );
  }
}

export default withStyles(style)(DocSidebar);
