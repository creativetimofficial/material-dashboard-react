import React from 'react';
import {
    withStyles, Checkbox, IconButton, Table, TableBody, TableCell, TableRow
} from 'material-ui';
import {
    Edit, Close
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
    checked: {
        color: '#00bcd4'
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
                                        classes={{
                                            checked: this.props.classes.checked,
                                        }}
                                    />
                                </TableCell>
                                <TableCell className={this.props.classes.tableCell}>
                                    {this.props.tasks[value]}
                                </TableCell>
                                <TableCell className={this.props.classes.tableActions}>
                                    <IconButton aria-label="Edit" className={this.props.classes.tableActionButton}>
                                        <Edit className={this.props.classes.tableActionButtonIcon + " " + this.props.classes.edit}/>
                                    </IconButton>
                                    <IconButton aria-label="Close" className={this.props.classes.tableActionButton}>
                                        <Close className={this.props.classes.tableActionButtonIcon + " " + this.props.classes.close}/>
                                    </IconButton>
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
