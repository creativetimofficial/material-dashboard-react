import React from 'react';
import {
    withStyles, AppBar, Toolbar, Hidden
} from 'material-ui';
import {
    List, BugReport,
} from 'material-ui-icons';
import { NavLink } from 'react-router-dom';

const style = theme => ({
    appBar: {
        color: '#fff',
        backgroundColor: '#9c27b0 !important',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 12px -5px rgba(156, 39, 176, .46)',
    },
    title: {
        position: 'relative',
        color: 'inherit',
        height: '50px',
        fontSize: '1.125rem',
        lineHeight: '46px',
        padding: '.625rem 0',
        display: 'inline-block',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '300',
        textDecoration: 'none'
    },
    iconLink: {
        fontSize: '18px',
        color: 'inherit',
        textDecoration: 'none',
        lineHeight: '20px',
        marginTop: '-4px',
        marginLeft: '12px'
    },
    rightLinks: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        marginLeft: '12px',
        color: 'inherit',
        textDecoration: 'none',
        display: 'inline-block',
        position: 'relative',
    },
    rightLinksText: {
        position: 'relative',
        top: '-8px',
    },
    flex: {
        [theme.breakpoints.up('md')]: {
            flex: '1'
        },
    }
});

class DocHeader extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.flex}>
                        <NavLink to="/" activeClassName="active" className={classes.title}>
                            Material Dashboard React
                        </NavLink>
                        <Hidden mdDown>
                            <a href="https://github.com/creativetimofficial/material-dashboard-react" className={classes.iconLink} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://twitter.com/CreativeTim" className={classes.iconLink}  target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </Hidden>
                    </div>
                    <div>
                        <NavLink to="/" activeClassName="active" className={classes.rightLinks}>
                            <List /> <span className={classes.rightLinksText}>Live Preview</span>
                        </NavLink>
                        <a href="https://twitter.com/CreativeTim" className={classes.rightLinks}  target="_blank" rel="noopener noreferrer">
                            <BugReport /> <span className={classes.rightLinksText}>Report an issue</span>
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(style)(DocHeader);
