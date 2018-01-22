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

import {
    Header, Footer, Sidebar, FixedPlugin
} from 'components';

import appRoutes from 'routes/app.jsx';

import { appStyle } from 'variables/styles';

import image from 'assets/img/sidebar-1.jpg';
import logo from 'assets/img/reactlogo.png';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image: image,
            color: "blue",
            hasImage: true,
            fixedClasses: "dropdown show",
            mobileOpen: false,
        };

        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleColorClick = this.handleColorClick.bind(this);
        this.handleFixedClick = this.handleFixedClick.bind(this);
    }
    handleImageClick(image){
        this.setState({image: image});
    }
    handleColorClick(color){
        this.setState({color: color});
    }
    handleFixedClick(){
        if(this.state.fixedClasses === "dropdown"){
            this.setState({fixedClasses: "dropdown show"})
        } else {
            this.setState({fixedClasses: "dropdown"});
        }
    }
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    render(){
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={appRoutes}
                    logoText={"Creative Tim"}
                    logo={logo}
                    image={this.state.image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color={this.state.color}
                    {...rest}
                />
                <div className={classes.mainPanel}>
                    <Header
                        routes={appRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />

                    <div className={classes.content}>
                        <div className={classes.container}>
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
                            <FixedPlugin
                                handleImageClick={this.handleImageClick}
                                handleColorClick={this.handleColorClick}
                                handleHasImage={this.handleHasImage}
                                bgColor={this.state["color"]}
                                bgImage={this.state["image"]}
                                handleFixedClick={this.handleFixedClick}
                                fixedClasses={this.state.fixedClasses}
                            />
                        </div>
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
