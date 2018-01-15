import React from 'react';
import {
    withStyles, Checkbox, IconButton, Table, TableBody, TableCell, TableRow, Tooltip,
} from 'material-ui';
import {
    Edit, Close, Check
} from 'material-ui-icons';
import PropTypes from 'prop-types';

import { tasksStyle } from 'variables/styles';

class Tasks extends React.Component{
    state = {
        checked: this.props.checkedIndexes,
    };
    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };
    render(){
        return (
            <Table className={this.props.classes.table}>
                <TableBody>
                    {
                        this.props.tasksIndexes.map(value => (
                            <TableRow key={value} className={this.props.classes.tableRow}>
                                <TableCell className={this.props.classes.tableCell}>
                                    <Checkbox
                                        checked={this.state.checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        onClick={this.handleToggle(value)}
                                        checkedIcon={<Check className={this.props.classes.checkedIcon}/>}
                                        icon={<Check className={this.props.classes.uncheckedIcon}/>}
                                        classes={{
                                            checked: this.props.classes.checked,
                                        }}
                                    />
                                </TableCell>
                                <TableCell className={this.props.classes.tableCell}>
                                    {this.props.tasks[value]}
                                </TableCell>
                                <TableCell className={this.props.classes.tableActions}>
                                    <Tooltip
                                        id="tooltip-top"
                                        title="Edit Task"
                                        placement="top"
                                        classes={{tooltip:this.props.classes.tooltip}}>
                                        <IconButton aria-label="Edit" className={this.props.classes.tableActionButton}>
                                            <Edit className={this.props.classes.tableActionButtonIcon + " " + this.props.classes.edit}/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip
                                        id="tooltip-top-start"
                                        title="Remove"
                                        placement="top"
                                        classes={{tooltip:this.props.classes.tooltip}}>
                                        <IconButton aria-label="Close" className={this.props.classes.tableActionButton}>
                                            <Close className={this.props.classes.tableActionButtonIcon + " " + this.props.classes.close}/>
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        );
    }
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tasksStyle)(Tasks);
