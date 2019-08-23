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
import tasksStyle from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const tooltip = `import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
//core components
import styles from 'assets/jss/material-dashboard-react/components/tasksStyle.js';

const useStyles = makeStyles(styles);

export default function Tooltips(){
  const classes = useStyles();
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
}`;
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
