import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Notifications from "@material-ui/icons/Notifications";
//core components
import Button from "components/CustomButtons/Button.jsx";

import dropdownStyle from "assets/jss/material-dashboard-react/dropdownStyle.jsx";

const dropdown = `import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Notifications from "@material-ui/icons/Notifications";
//core components
import Button from "components/CustomButtons/Button.jsx";

import dropdownStyle from "assets/jss/material-dashboard-react/dropdownStyle.jsx";

class Dropdown extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.manager}>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={open ? "menu-list-grow" : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>5</span>
          <Hidden mdUp implementation="css">
            <p onClick={this.handleClick} className={classes.linkText}>
              Notification
            </p>
          </Hidden>
        </Button>
        <Poppers
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !open }) +
            " " +
            classes.pooperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      You have 5 new tasks
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      You're now friend with Andrew
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Another Notification
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      Another One
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    );
  }
}

export default withStyles(dropdownStyle)(Dropdown);
`;

class Dropdown extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <h1>Dropdown</h1>
        <p>As most of our components we've restyled the dropdowns as well.</p>
        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className={classes.buttonLink}
          >
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <p onClick={this.handleClick} className={classes.linkText}>
                Notification
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={
              classNames({ [classes.popperClose]: !open }) +
              " " +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Mike John responded to your email
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        You have 5 new tasks
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        You're now friend with Andrew
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Another Notification
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Another One
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {dropdown}
        </SyntaxHighlighter>
        <h2>Properties</h2>
        Please refer to{" "}
        <a
          href="https://material-ui-next.com/demos/menus/#menulist-composition?ref=creativetim"
          target="_blank"
        >
          material-ui documentation
        </a>
        .
      </div>
    );
  }
}

export default withStyles(dropdownStyle)(Dropdown);
