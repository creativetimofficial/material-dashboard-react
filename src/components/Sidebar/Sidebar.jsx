import React from 'react';
import {
    List, ListItem, ListItemIcon, ListItemText
} from 'material-ui';
import { NavLink } from 'react-router-dom';

import appRoutes from 'routes/app.jsx';

class Sidebar extends React.Component {
    render() {
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



export default Sidebar;
