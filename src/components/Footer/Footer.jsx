import React from 'react';
import PropTypes from 'prop-types';
import {
    List, ListItem, withStyles
} from 'material-ui';

import { footerStyle } from 'variables/styles';

class Footer extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#home" className={classes.block}>Home</a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#company" className={classes.block}>Company</a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#portfolio" className={classes.block}>Portfolio</a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a href="#blog" className={classes.block}>Blog</a>
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
