import React, { Component } from "react"

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import ExpandMore from "@material-ui/icons/ExpandMore"

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

class Accordion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
    }

	render() {
        const { classes } = this.props;

		return (
			<ExpansionPanel expanded={this.state.expanded}
            onClick={() => {
                this.setState({
                    expanded: !this.state.expanded,
                })
            }}
            >
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <div className={classes.column}>
                    <Typography className={classes.heading}>{this.props.title}</Typography>
                </div>
                <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                        {this.props.subtitle}
                    </Typography>
                </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    {this.props.children}
                </ExpansionPanelDetails>
                <Divider />
                    {
                        this.props.hasOwnProperty("actions") ?
                        (
                            <ExpansionPanelActions>
                                <this.props.actions />
                            </ExpansionPanelActions>
                        ) : ""
                    }
            </ExpansionPanel>
		)
    }

}

export default withStyles(styles)(Accordion)
