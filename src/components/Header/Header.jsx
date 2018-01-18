import React from 'react';
import PropTypes from 'prop-types';
import {
    Menu, Person, Notifications, Dashboard, Search
} from 'material-ui-icons';
import {
    withStyles, AppBar, Toolbar, IconButton, Typography, Button, Input, Hidden
} from 'material-ui';

import { headerStyle } from 'variables/styles';

class Header extends React.Component{
    render(){
        const { classes } = this.props;
        return (
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
                        onClick={this.props.handleDrawerToggle}
                        className={classes.navIconHide}>
                        <Menu />
                    </IconButton>
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
