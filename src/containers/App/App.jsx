import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles, Drawer, AppBar, Toolbar, Typography, Divider, IconButton, Input, Button, Hidden
} from 'material-ui';
import {
    Menu, Search, Dashboard, Notifications, Person
} from 'material-ui-icons';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Sidebar from 'components/Sidebar/Sidebar.jsx';

import appRoutes from 'routes/app.jsx';

const drawerWidth = 260;

const styles = theme => ({
    wrapper: {
        position: 'relative',
        top: '0',
        height: '100vh',
    },
    flex: {
        flex: 1,
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: '0',
        marginBottom: '0',
        position: 'absolute',
        width: '100%',
        paddingTop: '10px',
        zIndex: '1029',
        color: '#555555',
        border: '0',
        borderRadius: '3px',
        padding: '10px 0',
        WebkitTransition: 'all 150ms ease 0s',
        MozTransition: 'all 150ms ease 0s',
        OTransition: 'all 150ms ease 0s',
        MsTransition: 'all 150ms ease 0s',
        transition: 'all 150ms ease 0s',
        minHeight: '50px',
        display: 'block',
        // marginLeft: drawerWidth,
        // [theme.breakpoints.up('md')]: {
        //     width: `calc(100% - ${drawerWidth}px)`,
        // },
    },
    toolbar:{
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        zIndex: '1',
        boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'fixed',
            height: '100%',
        },
        [theme.breakpoints.down('md')]: {
            width: drawerWidth,
            boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
            position: 'fixed',
            display: 'block',
            top: '0',
            height: '100vh',
            right: '0',
            left: 'auto',
            zIndex: '1032',
            visibility: 'visible',
            // backgroundColor: '#9A9A9A',
            overflowY: 'visible',
            borderTop: 'none',
            textAlign: 'left',
            paddingRight: '0px',
            paddingLeft: '0',
            WebkitTransform: 'translate3d(260px, 0, 0)',
            MozTransform: 'translate3d(260px, 0, 0)',
            OTransform: 'translate3d(260px, 0, 0)',
            MsTransform: 'translate3d(260px, 0, 0)',
            transform: 'translate3d(260px, 0, 0)',
            WebkitTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
            MozTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
            OTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
            MsTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
            transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',

        },
    },
    mainPanel: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        overflow: 'auto',
        position: 'relative',
        float: 'right',
        WebkitTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
        MozTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
        OTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
        MsTransition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
        transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
        maxHeight: '100%',
    },
    content: {
        marginTop: '70px',
        padding: '30px 15px',
        minHeight: 'calc(100% - 123px)',
    }
});

class App extends React.Component{
    state = {
        mobileOpen: false,
        value: 'recents'
    };
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <Hidden mdUp>
                    <Drawer
                        type="temporary"
                        anchor='right'
                        open={this.state.mobileOpen}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onRequestClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        <div>
                            <div className={classes.drawerHeader}/>
                            <Divider />
                            <Sidebar />
                        </div>
                    </Drawer>
                </Hidden>
                <Hidden mdDown implementation="css">
                    <Drawer
                        anchor='left'
                        type="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <div>
                            <div className={classes.drawerHeader}/>
                            <Divider />
                            <Sidebar />
                        </div>
                    </Drawer>
                </Hidden>
                <div className={classes.mainPanel}>
                    <AppBar className={classes.appBar} color="default">
                        <Toolbar className={classes.toolbar}>
                            <Typography type="title" color="inherit" className={classes.flex}>
                                Title
                            </Typography>
                            <Hidden mdDown implementation="css">
                                <Input
                                    placeholder="Search"
                                    inputProps={{
                                        'aria-label': 'Search',
                                    }}
                                />
                                <Button mini fab color="inherit" aria-label="edit">
                                    <Search />
                                </Button>
                                <IconButton color="inherit" aria-label="Dashboard">
                                    <Dashboard />
                                </IconButton>
                                <IconButton color="inherit" aria-label="Notifications">
                                    <Notifications />
                                </IconButton>
                                <IconButton color="inherit" aria-label="Person">
                                    <Person />
                                </IconButton>
                            </Hidden>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}>
                                <Menu />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.content}>
                        <Switch>
                            {
                                appRoutes.map((prop,key) => {
                                    if(prop.redirect)
                                        return (
                                            <Redirect from={prop.path} to={prop.to} key={key}/>
                                        );
                                    return (
                                        <Route path={prop.path} component={prop.component} key={key}/>
                                    );
                                })
                            }
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
