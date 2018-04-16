import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";

import {
    Header, Footer, Sidebar, FixedPlugin
} from 'components';

import dashboardRoutes from "routes/dashboard.jsx";

import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";

import image from 'assets/img/sidebar-4.jpg';
import logo from 'assets/img/reactlogo.png';

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Dashboard extends React.Component{
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
    getRoute(){
        return this.props.location.pathname !== "/maps";
    }
    componentDidMount(){
        if(window.innerWidth > 991)
        {
            // eslint-disable-next-line
            const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
    }
    componentDidUpdate(){
        this.refs.mainPanel.scrollTop = 0;
    }
    render(){
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={dashboardRoutes}
                    logoText={"Creative Tim"}
                    logo={logo}
                    image={this.state.image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color={this.state.color}
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    <Header
                        routes={dashboardRoutes}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />
                    {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
                    {
                        this.getRoute() ? (
                                <div className={classes.content}>
                                    <div className={classes.container}>
                                        {switchRoutes}
                                    </div>
                                </div>
                            ):(
                                <div className={classes.map}>
                                    {switchRoutes}
                                </div>
                            )
                    }
                    {this.getRoute() ? (<Footer />):(null)}
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
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Dashboard);
