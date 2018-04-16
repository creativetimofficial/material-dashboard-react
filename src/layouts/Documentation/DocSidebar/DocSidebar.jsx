import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles, List, ListItem, ListItemText } from "material-ui";

const style = theme => ({
  list: {
    overflowY: "auto",
    maxHeight: "calc(100vh - 4rem)",
    paddingTop: "40px",
    paddingRight: "30px",
    paddingLeft: "30px",
    paddingBottom: ".25rem",
    borderRight: "1px solid rgba(0,0,0,.1)",
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      paddingTop: "15px"
    }
  },
  listItemText: {
    display: "block",
    fontSize: "90%",
    color: "rgba(0,0,0,.65)",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "300",
    lineHeight: "1.5em"
  },
  active: {
    fontWeight: "500",
    color: "rgba(0,0,0,.85)",
    backgroundColor: "transparent"
  },
  navLink: {
    textDecoration: "none"
  },
  listItem: {
    paddingTop: ".25rem"
  }
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
            <NavLink
              to={prop.path}
              activeClassName="active"
              key={key}
              className={classes.navLink}
            >
              <ListItem className={classes.listItem}>
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
    );
  }
}

export default withStyles(style)(DocSidebar);
