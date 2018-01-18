import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText
} from 'material-ui';
import { NavLink } from 'react-router-dom';

import appRoutes from 'routes/app.jsx';

import { sidebarStyle } from 'variables/styles';

class SidebarLinks extends React.Component{
    render(){
        return (
            <List>
                {
                    appRoutes.map((prop,key) => {
                        if(prop.redirect)
                            return null;
                        return (
                            <NavLink to={prop.path} className="nav-link" activeClassName="active" key={key}>
                                <ListItem button >
                                    <ListItemIcon>
                                        <prop.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={prop.sidebarName} />
                                </ListItem>
                            </NavLink>
                        );
                    })
                }
            </List>
        );
    }
}

class Sidebar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        type="temporary"
                        anchor='right'
                        open={this.props.open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onRequestClose={this.props.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        <div>
                            <SidebarLinks />
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
                            <SidebarLinks />
                        </div>
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle, { withTheme: true })(Sidebar);
