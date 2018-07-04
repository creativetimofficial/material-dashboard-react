import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import Button from '@material-ui/core/Button';
import Chat from '@material-ui/icons/Chat';

// core components
import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      botShown: false
    };
  }
  showBot() {
    this.setState({
      botShown: !this.state.botShown
    })
  }
  render() {
    const { classes } = this.props;
    const bWindowStyle = {
      height: "650px",
      position: "fixed",
      bottom: 0,
      right: 0,
      marginRight: "20px",
      marginBottom: "50px",
      zIndex: 10000
    }
    const botStyle = !this.state.botShown ? Object.assign({}, bWindowStyle, { display: "none" }) : bWindowStyle;
    return (
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.left}>
            <Button variant="fab" color="primary" aria-label="add" onClick={this.showBot.bind(this)} style={{
              position: "fixed", right: 0, marginRight: "10px", bottom: 0, marginBottom: "10px"
            }}>
              <Chat />
            </Button>
            <div id='botDiv' align='right' style={botStyle}>
              <div id='botTitleBar' align='right'></div>
              <iframe width='400px' height='600px' src='https://console.dialogflow.com/api-client/demo/embedded/2e819d02-ecb8-4bdf-8c70-21b28b942f35'></iframe>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
