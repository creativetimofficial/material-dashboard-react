import React from 'react';
import PropTypes from 'prop-types';
import {
    Menu, Person, Notifications, Dashboard, Search,
} from 'material-ui-icons';
import {
    withStyles, AppBar, Toolbar, IconButton, Hidden, Button
} from 'material-ui';

import { CustomInput, IconButton as SearchButton } from 'components';

import { headerStyle } from 'variables/styles';

class Header extends React.Component{
    render(){
        const { classes } = this.props;
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
                        <IconButton color="inherit" aria-label="Notifications">
                            <Notifications className={classes.links}/>
                        </IconButton>
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
