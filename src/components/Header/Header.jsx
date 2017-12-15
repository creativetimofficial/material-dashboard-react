import React from 'react';
import {
    Menu, Person, Notifications, Dashboard, Search
} from 'material-ui-icons';
import {
    AppBar, Toolbar, IconButton, Typography, Button, Input, withStyles
} from 'material-ui';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="default" aria-label="Menu">
                            <Menu />
                        </IconButton>
                        <Typography type="title" color="default" className={classes.flex}>
                            Title
                        </Typography>
                        <Input
                            placeholder="Search"
                            inputProps={{
                                'aria-label': 'Search',
                            }}
                        />
                        <Button mini fab color="default" aria-label="edit">
                            <Search />
                        </Button>
                        <IconButton color="default" aria-label="Dashboard">
                            <Dashboard />
                        </IconButton>
                        <IconButton color="default" aria-label="Notifications">
                            <Notifications />
                        </IconButton>
                        <IconButton color="default" aria-label="Person">
                            <Person />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
