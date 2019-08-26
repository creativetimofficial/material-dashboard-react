/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { withStyles, AppBar, Toolbar, Hidden } from "@material-ui/core";
import { List, BugReport, Star } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

const style = theme => ({
  appBar: {
    color: "#fff",
    backgroundColor: "#00acc1 !important",
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  },
  vButton: {
    padding: "12px",
    marginLeft: "4px",
    marginRight: "4px"
  },
  title: {
    "&:hover,&:active": {
      opacity: "0.8"
    },
    "&,&:hover,&:active": {
      color: "inherit"
    },
    position: "relative",
    height: "50px",
    fontSize: "1.125rem",
    lineHeight: "46px",
    padding: ".625rem 0",
    display: "inline-block",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "300",
    textDecoration: "none"
  },
  iconLink: {
    "&:hover,&:active": {
      opacity: "0.8"
    },
    "&,&:hover,&:active": {
      color: "inherit"
    },
    fontSize: "18px",
    textDecoration: "none",
    lineHeight: "20px",
    marginTop: "-4px",
    marginLeft: "12px"
  },
  rightLinks: {
    "&:hover,&:active": {
      opacity: "0.8"
    },
    "&,&:hover,&:active": {
      color: "inherit"
    },
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    fontSize: "12px",
    marginLeft: "12px",
    textDecoration: "none",
    display: "inline-block",
    position: "relative"
  },
  rightLinksText: {
    position: "relative",
    top: "-8px"
  },
  flex: {
    [theme.breakpoints.up("md")]: {
      flex: "1"
    }
  },
  block: {
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  }
});

class DocHeader extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.block}>
          <div className={classes.flex}>
            <NavLink to="/" activeClassName="active" className={classes.title}>
              Material Dashboard React
            </NavLink>
            <Hidden mdDown>
              <Button color="transparent" className={classes.vButton}>
                v1.8.0
              </Button>
              <a
                href="https://github.com/creativetimofficial/material-dashboard-react?ref=creativetim"
                className={classes.iconLink}
                target="_blank"
              >
                <i className="fa fa-github" />
              </a>
              <a
                href="https://twitter.com/CreativeTim?ref=creativetim"
                className={classes.iconLink}
                target="_blank"
              >
                <i className="fa fa-twitter" />
              </a>
            </Hidden>
          </div>
          <div>
            <NavLink
              to="/"
              activeClassName="active"
              className={classes.rightLinks}
            >
              <List />{" "}
              <span className={classes.rightLinksText}>Back to dashboard</span>
            </NavLink>
            <a
              href="https://github.com/creativetimofficial/material-dashboard-react/issues?ref=creativetim"
              className={classes.rightLinks}
              target="_blank"
            >
              <BugReport />{" "}
              <span className={classes.rightLinksText}>Report a bug</span>
            </a>
            <a
              href="https://github.com/creativetimofficial/material-dashboard-react?ref=creativetim"
              className={classes.rightLinks}
              target="_blank"
            >
              <Star />{" "}
              <span className={classes.rightLinksText}>Help with a start</span>
            </a>
            <a
              href="#pablo"
              className={classes.rightLinks}
              target="_blank"
              onClick={e => e.preventDefault()}
            />
            <a
              href="#pablo"
              className={classes.rightLinks}
              target="_blank"
              onClick={e => e.preventDefault()}
            />
            <a
              href="#pablo"
              className={classes.rightLinks}
              target="_blank"
              onClick={e => e.preventDefault()}
            />
            <a
              href="https://github.com/creativetimofficial/material-dashboard-react?ref=creativetim"
              className="github-corner"
              aria-label="View source on Github"
            >
              <svg
                width="70"
                height="70"
                viewBox="0 0 250 250"
                style={{
                  fill: "#fff",
                  color: "#26c6da",
                  position: "absolute",
                  top: "0",
                  border: "0",
                  right: "0"
                }}
                aria-hidden="true"
              >
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
                <path
                  d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                  fill="currentColor"
                  style={{ transformOrigin: "130px 106px" }}
                  className="octo-arm"
                />
                <path
                  d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                  fill="currentColor"
                  className="octo-body"
                />
              </svg>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(style)(DocHeader);
