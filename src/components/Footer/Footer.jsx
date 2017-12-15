import React from 'react';
import PropTypes from 'prop-types';
import {
    List, ListItem, ListItemText, withStyles
} from 'material-ui';

const styles = () => ({
    block: {
        display: 'block',
        position: 'relative'
    },
    inlineBlock: {
        display: 'inline-block'
    },
    right: {
        float: 'right!important',
        padding: '15px 0'
    }
});

class Footer extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <List>
                <ListItem className={classes.inlineBlock}>
                    <ListItemText primary="Home" className={classes.block}/>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                    <ListItemText primary="Company" className={classes.block}/>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                    <ListItemText primary="Portfolio" className={classes.block}/>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                    <ListItemText primary="Blog" className={classes.block}/>
                </ListItem>
                <ListItem className={classes.right+" "+classes.inlineBlock}>
                    <ListItemText primary={<span>
                        &copy; {1900 + (new Date()).getYear()} <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                    </span>} className={classes.block}/>
                </ListItem>
            </List>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
