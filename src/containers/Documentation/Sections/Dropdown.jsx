import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
import {
    Notifications
} from 'material-ui-icons';
import classNames from 'classnames';
import {
    withStyles, IconButton, MenuItem, MenuList, Grow, Paper, ClickAwayListener, Hidden
} from 'material-ui';
import { Manager, Target, Popper } from 'react-popper';

import { P } from 'components';

const dropdown = `import React from 'react';
import {
    Notifications
} from 'material-ui-icons';
import classNames from 'classnames';
import {
    withStyles, IconButton, MenuItem, MenuList, Grow, Paper, ClickAwayListener, Hidden
} from 'material-ui';
import { Manager, Target, Popper } from 'react-popper';

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '300',
    lineHeight: '1.5em',
};
const primaryColor = '#9c27b0';
const primaryBoxShadow = {
    boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)'
};
const styles = theme => ({
    buttonLink: {
        [theme.breakpoints.down('md')]:{
            display: 'flex',
            marginLeft: '30px',
            width: 'auto',
        },
    },
    links:{
        width: '20px',
        height: '20px',
        zIndex: '4',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: '30px',
            height: '30px',
            color: '#a9afbb',
            marginRight: '15px',
        },
    },
    linkText: {
        zIndex: '4',
        ...defaultFont,
        fontSize: '14px',
    },
    popperClose: {
      pointerEvents: 'none',
    },
    pooperResponsive: {
        [theme.breakpoints.down('md')]: {
            zIndex: '1640',
            position: 'static',
            float: 'none',
            width: 'auto',
            marginTop: '0',
            backgroundColor: 'transparent',
            border: '0',
            WebkitBoxShadow: 'none',
            boxShadow: 'none',
            color: 'black'
        }
    },
    dropdown: {
        borderRadius: '3px',
        border: '0',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
        top: '100%',
        zIndex: '1000',
        minWidth: '160px',
        padding: '5px 0',
        margin: '2px 0 0',
        fontSize: '14px',
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box',
    },
    dropdownItem: {
        ...defaultFont,
        fontSize: '13px',
        padding: '10px 20px',
        margin: '0 5px',
        borderRadius: '2px',
        WebkitTransition: 'all 150ms linear',
        MozTransition: 'all 150ms linear',
        OTransition: 'all 150ms linear',
        MsTransition: 'all 150ms linear',
        transition: 'all 150ms linear',
        display: 'block',
        clear: 'both',
        fontWeight: '400',
        lineHeight: '1.42857143',
        color: '#333',
        whiteSpace: 'nowrap',
        '&:hover': {
            backgroundColor: primaryColor,
            color: '#FFFFFF',
            ...primaryBoxShadow,
        }
    },
});

class ExampleDropdown extends React.Component{
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
            <Manager style={{display:"inline-block"}}>
                <Target>
                    <IconButton
                        color="inherit"
                        aria-label="Notifications"
                        aria-owns={open ? 'menu-list' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick} className={classes.buttonLink}>
                        <Notifications className={classes.links}/>
                        <Hidden mdUp>
                            <p onClick={this.handleClick} className={classes.linkText}>Notification</p>
                        </Hidden>
                    </IconButton>
                </Target>
                <Popper
                    placement="bottom-start"
                    eventsEnabled={open}
                    className={classNames({ [classes.popperClose]: !open })+ " " + classes.pooperResponsive}>
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
        );
    }
};

ExampleDropdown.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExampleDropdown);`

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '300',
    lineHeight: '1.5em',
};
const primaryColor = '#9c27b0';
const primaryBoxShadow = {
    boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)'
};
const styles = theme => ({
    buttonLink: {
        [theme.breakpoints.down('md')]:{
            display: 'flex',
            marginLeft: '30px',
            width: 'auto',
        },
    },
    links:{
        width: '20px',
        height: '20px',
        zIndex: '4',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: '30px',
            height: '30px',
            color: '#a9afbb',
            marginRight: '15px',
        },
    },
    linkText: {
        zIndex: '4',
        ...defaultFont,
        fontSize: '14px',
    },
    popperClose: {
      pointerEvents: 'none',
    },
    pooperResponsive: {
        [theme.breakpoints.down('md')]: {
            zIndex: '1640',
            position: 'static',
            float: 'none',
            width: 'auto',
            marginTop: '0',
            backgroundColor: 'transparent',
            border: '0',
            WebkitBoxShadow: 'none',
            boxShadow: 'none',
            color: 'black'
        }
    },
    dropdown: {
        borderRadius: '3px',
        border: '0',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
        top: '100%',
        zIndex: '1000',
        minWidth: '160px',
        padding: '5px 0',
        margin: '2px 0 0',
        fontSize: '14px',
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box',
    },
    dropdownItem: {
        ...defaultFont,
        fontSize: '13px',
        padding: '10px 20px',
        margin: '0 5px',
        borderRadius: '2px',
        WebkitTransition: 'all 150ms linear',
        MozTransition: 'all 150ms linear',
        OTransition: 'all 150ms linear',
        MsTransition: 'all 150ms linear',
        transition: 'all 150ms linear',
        display: 'block',
        clear: 'both',
        fontWeight: '400',
        lineHeight: '1.42857143',
        color: '#333',
        whiteSpace: 'nowrap',
        '&:hover': {
            backgroundColor: primaryColor,
            color: '#FFFFFF',
            ...primaryBoxShadow,
        }
    },
});

class Dropdown extends React.Component{
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
            <div>
                <h1>Dropdown</h1>
                <P>As most of our components we've restyled the dropdowns as well.</P>
                <Manager style={{display:"inline-block"}}>
                    <Target>
                        <IconButton
                            color="inherit"
                            aria-label="Notifications"
                            aria-owns={open ? 'menu-list' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick} className={classes.buttonLink}>
                            <Notifications className={classes.links}/>
                            <Hidden mdUp>
                                <p onClick={this.handleClick} className={classes.linkText}>Notification</p>
                            </Hidden>
                        </IconButton>
                    </Target>
                    <Popper
                        placement="bottom-start"
                        eventsEnabled={open}
                        className={classNames({ [classes.popperClose]: !open })+ " " + classes.pooperResponsive}>
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
                <SyntaxHighlighter language="jsx" style={prism}>{dropdown}</SyntaxHighlighter>
                <h2>Properties</h2>
                Please refer to <a href="https://material-ui-next.com/demos/menus/#menulist-composition" target="_blank" rel="noopener noreferrer">material-ui documentation</a>.
            </div>
        );
    }
}

export default withStyles(styles)(Dropdown);
