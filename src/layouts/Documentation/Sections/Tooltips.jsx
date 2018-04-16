import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
import {
    withStyles, IconButton, Tooltip,
} from 'material-ui';
import {
    Edit, Close,
} from '@material-ui/icons';
import PropTypes from 'prop-types';

import tasksStyle from 'assets/jss/material-dashboard-react/tasksStyle.jsx';

import { P } from 'components';

const tooltip = `import React from 'react';
import {
    withStyles, IconButton, Tooltip,
} from 'material-ui';
import {
    Edit, Close, Check
} from '@material-ui/icons';
import PropTypes from 'prop-types';

import tasksStyle from 'assets/jss/material-dashboard-react/tasksStyle.jsx';

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
class Tooltips extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <div>
                <h1>Tooltips</h1>
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
                <SyntaxHighlighter language="jsx" style={prism}>{tooltip}</SyntaxHighlighter>
                <h2>Props</h2>
                <P>Please check out the <a href="https://material-ui-next.com/demos/tooltips/" target="_blank" rel="noopener noreferrer">official material-ui documentation</a>.</P>
            </div>
        );
    }
}
Tooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tasksStyle)(Tooltips);
