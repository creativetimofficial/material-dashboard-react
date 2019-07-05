/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
//core components
import tasksStyle from "assets/jss/material-dashboard-react/components/tasksStyle.jsx";

const tooltip = `import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
//core components
import tasksStyle from 'assets/jss/material-dashboard-react/components/tasksStyle.jsx';

class Tooltips extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <div>
                <Tooltip
                    id="tooltip-top"
                    title="Edit Task"
                    placement="top"
                    classes={{tooltip:classes.tooltip}}>
                    <IconButton aria-label="Edit" className={classes.tableActionButton}>
                        <Edit className={classes.tableActionButtonIcon + " " + classes.edit}/>
                    </IconButton>
                </Tooltip>
                <Tooltip
                    id="tooltip-top-start"
                    title="Remove"
                    placement="top"
                    classes={{tooltip:classes.tooltip}}>
                    <IconButton aria-label="Close" className={classes.tableActionButton}>
                        <Close className={classes.tableActionButtonIcon + " " + classes.close}/>
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
}
Tooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tasksStyle)(Tooltips);`;
class Tooltips extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Tooltips</h1>
        <Tooltip
          id="tooltip-top"
          title="Edit Task"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton aria-label="Edit" className={classes.tableActionButton}>
            <Edit
              className={classes.tableActionButtonIcon + " " + classes.edit}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="tooltip-top-start"
          title="Remove"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton aria-label="Close" className={classes.tableActionButton}>
            <Close
              className={classes.tableActionButtonIcon + " " + classes.close}
            />
          </IconButton>
        </Tooltip>
        <SyntaxHighlighter language="jsx" style={prism}>
          {tooltip}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please check out the{" "}
          <a
            href="https://material-ui-next.com/demos/tooltips/?ref=creativetim"
            target="_blank"
          >
            official material-ui documentation
          </a>
          .
        </p>
      </div>
    );
  }
}
Tooltips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tasksStyle)(Tooltips);
