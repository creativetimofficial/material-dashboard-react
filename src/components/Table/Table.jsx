import React from 'react';
import {
    withStyles, Table, TableHead, TableRow, TableBody, TableCell
} from 'material-ui';
import PropTypes from 'prop-types';

import { tableStyle } from 'variables/styles';

class CustomTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        switch (this.props.tableHeaderColor) {
            case 'warning':
                this.state.tableHeaderColor = " " + this.props.classes.tableHeaderWarning
                break;
            case 'primary':
                this.state.tableHeaderColor = " " + this.props.classes.tableHeaderPrimary
                break;
            case 'danger':
                this.state.tableHeaderColor = " " + this.props.classes.tableHeaderDanger
                break;
            case 'success':
                this.state.tableHeaderColor = " " + this.props.classes.tableHeaderSuccess
                break;
            case 'info':
                this.state.tableHeaderColor = " " + this.props.classes.tableHeaderInfo
                break;
            case 'rose':
                this.state.tableHeaderColor = " " + this.props.classes.tableHeaderRose
                break;
            default:
                this.state.tableHeaderColor = " " + this.props.classes.tableHeaderGray
            break;
        }
    }
    render(){
        return (
            <Table className={this.props.classes.table}>
                {
                    this.props.tableHead !== undefined ? (
                        <TableHead className={this.state.tableHeaderColor}>
                            <TableRow>
                                {
                                    this.props.tableHead.map((prop,key) => {
                                        return (
                                            <TableCell
                                                className={this.props.classes.tableCell + " " + this.props.classes.tableHeadCell}
                                                key={key}>
                                                {prop}
                                            </TableCell>
                                        );
                                    })
                                }
                            </TableRow>
                        </TableHead>
                    ):null
                }
                <TableBody>
                    {
                        this.props.tableData.map((prop,key) => {
                            return (
                                <TableRow key={key}>
                                    {
                                        prop.map((prop,key) => {
                                            return (
                                                <TableCell
                                                    className={this.props.classes.tableCell}
                                                    key={key}>
                                                    {prop}
                                                </TableCell>
                                            );
                                        })
                                    }
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        );
    }
}

CustomTable.propTypes = {
    classes: PropTypes.object.isRequired,
    tableHeaderColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
