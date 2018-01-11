import React from 'react';
import {
    withStyles, Checkbox, IconButton, Table, TableBody, TableCell, TableRow
} from 'material-ui';
import {
    Edit, Close
} from 'material-ui-icons';
import PropTypes from 'prop-types';

var bugs = ['Sign contract for "What are conference organizers afraid of?"','Lines From Great Russian Literature? Or E-mails From My Boss?','Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Create 4 Invisible User Experiences you Never Knew About'];
var website = ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Sign contract for "What are conference organizers afraid of?"'];
var server = ['Lines From Great Russian Literature? Or E-mails From My Boss?','Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Sign contract for "What are conference organizers afraid of?"'];

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
    }
};

class Tasks extends React.Component{
    state = {
        value: 0,
        checkedBugs: [0,3],
        checkedWebsite: [0],
        checkedServer: [1]
    };
    handleServerToggle = value => () => {
        const { checkedServer } = this.state;
        const currentIndex = checkedServer.indexOf(value);
        const newChecked = [...checkedServer];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checkedServer: newChecked,
        });
    };
    handleWebsiteToggle = value => () => {
        const { checkedWebsite } = this.state;
        const currentIndex = checkedWebsite.indexOf(value);
        const newChecked = [...checkedWebsite];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checkedWebsite: newChecked,
        });
    };
    handleBugsToggle = value => () => {
        const { checkedBugs } = this.state;
        const currentIndex = checkedBugs.indexOf(value);
        const newChecked = [...checkedBugs];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checkedBugs: newChecked,
        });
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render(){
        return (
            <Table className={this.props.classes.table}>
                <TableBody>
                    {
                        [0,1,2,3].map(value => (
                            <TableRow key={value} className={this.props.classes.tableRow}>
                                <TableCell className={this.props.classes.tableCell}>
                                    <Checkbox
                                        checked={this.state.checkedBugs.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        onClick={this.handleBugsToggle(value)}
                                        classes={{
                                            checked: this.props.classes.checked,
                                        }}
                                    />
                                </TableCell>
                                <TableCell className={this.props.classes.tableCell}>
                                    {bugs[value]}
                                </TableCell>
                                <TableCell className={this.props.classes.tableActions}>
                                    <IconButton aria-label="Edit" className={this.props.classes.tableActionButton}>
                                        <Edit className={this.props.classes.tableActionButtonIcon}/>
                                    </IconButton>
                                    <IconButton aria-label="Close" className={this.props.classes.tableActionButton}>
                                        <Close className={this.props.classes.tableActionButtonIcon}/>
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
