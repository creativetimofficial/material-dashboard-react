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

const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        height: 430,
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
    },
    flex: {
        flex: 1,
    },
    appFrame: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'fixed',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'fixed',
            height: '100%',
        },
    },
    content: {
        position: 'absolute',
        padding: theme.spacing.unit * 3,
        height: '100%',
        // height: 'calc(100% - 112px)',
        marginTop: 36,
        [theme.breakpoints.up('md')]:{
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth+65}px)`,
        },
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 46
        },
    },
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
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar} color="default">
                        <Toolbar>
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
                    <main className={classes.content}>
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
                        <Footer />
                    </main>
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
