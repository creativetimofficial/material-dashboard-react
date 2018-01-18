import React from 'react';
import PropTypes from 'prop-types';
import {
    Menu, Person, Notifications, Dashboard, Search,
} from 'material-ui-icons';
import classNames from 'classnames';
import {
    withStyles, AppBar, Toolbar, IconButton, Hidden, Button, MenuItem, MenuList, Grow, Paper, ClickAwayListener
} from 'material-ui';
import { Manager, Target, Popper } from 'react-popper';

import { CustomInput, IconButton as SearchButton } from 'components';

import { headerStyle } from 'variables/styles';

class Header extends React.Component{
    state = {
      open: false,
    };

    handleClick = () => {
      this.setState({ open: !this.state.open });
    };

    handleClose = () => {
      this.setState({ open: false });
    };
    render(){
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <AppBar className={classes.appBar} color="default">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.flex}>
                        <Button href="#" className={classes.title}>Title</Button>
                    </div>
                    <Hidden mdDown implementation="css">
                        <CustomInput
                            formControlProps={{
                                className: classes.top
                            }}
                            inputProps={{
                                placeholder:"Search",
                                inputProps:{
                                    'aria-label': 'Search',
                                }
                            }}/>
                        <span>
                            <SearchButton color="white" aria-label="edit" customClass={classes.top}>
                                <Search className={classes.links}/>
                            </SearchButton>
                        </span>
                        <IconButton color="inherit" aria-label="Dashboard">
                            <Dashboard className={classes.links}/>
                        </IconButton>
                        <Manager style={{display:"inline-block"}}>
                            <Target>
                                <IconButton
                                    color="inherit"
                                    aria-label="Notifications"
                                    aria-owns={open ? 'menu-list' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}>
                                    <Notifications className={classes.links}/>
                                </IconButton>
                            </Target>
                            <Popper
                                placement="bottom-start"
                                eventsEnabled={open}
                                className={classNames({ [classes.popperClose]: !open })}>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                                        <Paper className={classes.dropdown}>
                                            <MenuList role="menu">
                                                <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>Mike John responded to your email</MenuItem>
                                                <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>You have 5 new tasks</MenuItem>
                                                <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>You're now friend with Andrew</MenuItem>
                                                <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>Another Notification</MenuItem>
                                                <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>Another One</MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grow>
                                </ClickAwayListener>
                            </Popper>
                        </Manager>
                        <IconButton color="inherit" aria-label="Person">
                            <Person className={classes.links}/>
                        </IconButton>
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="contrast"
                            aria-label="open drawer"
                            onClick={this.props.handleDrawerToggle}>
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(headerStyle, { withTheme: true })(Header);
