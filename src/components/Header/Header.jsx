import React from 'react';
import PropTypes from 'prop-types';
import {
    Menu
} from 'material-ui-icons';
import {
    withStyles, AppBar, Toolbar, IconButton, Hidden, Button,
} from 'material-ui';

import { headerStyle } from 'variables/styles';

import HeaderLinks from './HeaderLinks';

class Header extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <AppBar className={classes.appBar} color="default">
                <Toolbar className={classes.container}>
                    <div className={classes.flex}>
                        <Button href="#" className={classes.title}>Title</Button>
                    </div>
                    <Hidden mdDown implementation="css">
                        <HeaderLinks />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
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
