import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import sdk from '@stackblitz/sdk';

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const code = `document.getElementById('time').innerHTML = new Date();`;

// Create the index.html file
const html = `<h1>I was created on <span id='time'></span></h1>`

// Create the project payload.
const project = {
  files: {
    "index.ts": code,
    'index.html': html
  },
  title: 'Dynamically Generated Project',
  description: 'Created with <3 by the StackBlitz SDK!',
  template: 'typescript',
  tags: [],
  dependencies: {}
};

class Dashboard extends React.Component {
  state = {
    value: 0
  };

  componentDidMount(){
    sdk.embedProject('embedDiv', project, { height: window.innerHeight * 0.8 });
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  
  render() {
    return (
      <div>
        <div id="embedDiv">
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

Dashboard.defaultProps = {
  events: []
}
export default withStyles(dashboardStyle)(Dashboard);
