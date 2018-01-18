import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
} from 'material-ui';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Sidebar from 'components/Sidebar/Sidebar.jsx';

import appRoutes from 'routes/app.jsx';

import { appStyle } from 'variables/styles';

class App extends React.Component{
    state = {
        mobileOpen: false,
        value: 'recents'
    };
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                />
                <div className={classes.mainPanel}>
                    <Header
                        handleDrawerToggle={this.handleDrawerToggle}
                    />

                    <div className={classes.content}>
                        <Switch>
                            {
                                appRoutes.map((prop,key) => {
                                    if(prop.redirect)
                                        return (
                                            <Redirect from={prop.path} to={prop.to} key={key}/>
                                        );
                                    return (
                                        <Route path={prop.path} component={prop.component} key={key}/>
                                    );
                                })
                            }
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(appStyle, { withTheme: true })(App);
