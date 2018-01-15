import React from 'react';
import {
    withStyles, Checkbox, IconButton, Table, TableBody, TableCell, TableRow, Tooltip,
} from 'material-ui';
import {
    Edit, Close, Check
} from 'material-ui-icons';
import PropTypes from 'prop-types';

const styles = {
    table: {
        marginBottom: '0',
    },
    tableRow: {
        position: 'relative',
        borderBottom: '1px solid #dddddd'
    },
    tableActions: {
        display: 'flex',
        border: 'none',
        padding: '12px 8px !important',
        verticalAlign: 'middle',
    },
    tableCell: {
        padding: '12px 8px',
        verticalAlign: 'middle',
        border: 'none',
        lineHeight: '1.42857143',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        fontSize: '14px',
    },
    tableActionButton: {
        width: '27px',
        height: '27px',
    },
    tableActionButtonIcon: {
        width: '17px',
        height: '17px',
    },
    edit: {
        backgroundColor: 'transparent',
        color: '#9c27b0',
        boxShadow: 'none',
    },
    close: {
        backgroundColor: 'transparent',
        color: '#f44336',
        boxShadow: 'none',
    },
    checked: {
        color: '#9c27b0'
    },
    checkedIcon: {
        width: '20px',
        height: '20px',
        border: '1px solid rgba(0, 0, 0, .54)',
        borderRadius: '3px',
    },
    uncheckedIcon: {
        width: '0px',
        height: '0px',
        padding: '10px',
        border: '1px solid rgba(0, 0, 0, .54)',
        borderRadius: '3px',
    },
    tooltip: {
        padding: '10px 15px',
        minWidth: '130px',
        color: '#555555',
        lineHeight: '1.7em',
        background: '#FFFFFF',
        border: 'none',
        borderRadius: '3px',
        boxShadow: '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
        maxWidth: '200px',
        textAlign: 'center',
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: '400',
        textShadow: 'none',
        textTransform: 'none',
        letterSpacing: 'normal',
        wordBreak: 'normal',
        wordSpacing: 'normal',
        wordWrap: 'normal',
        whiteSpace: 'normal',
        lineBreak: 'auto',
    }
};

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

export default withStyles(styles)(Tasks);
