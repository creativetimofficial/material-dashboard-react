import React from 'react';
import PropTypes from 'prop-types';
import {
    List, ListItem, ListItemText, withStyles
} from 'material-ui';

import { footerStyle } from 'variables/styles';

class Footer extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <div className={classes.fluid}>
                    <div className={classes.left}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <ListItemText primary="Home" className={classes.block} disableTypography={true}/>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <ListItemText primary="Company" className={classes.block} disableTypography={true}/>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <ListItemText primary="Portfolio" className={classes.block} disableTypography={true}/>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <ListItemText primary="Blog" className={classes.block} disableTypography={true}/>
                            </ListItem>
                        </List>
                    </div>
                    <p className={classes.right}>
                        <span>
                            &copy; {1900 + (new Date()).getYear()} <a href="http://www.creative-tim.com" className={classes.a}>Creative Tim</a>, made with love for a better web
                        </span>
                    </p>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
