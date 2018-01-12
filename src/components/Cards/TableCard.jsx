import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableRow, TableHead,
} from 'material-ui';
import PropTypes from 'prop-types';

import { tableCardstyle } from 'variables/styles';

class TableCard extends React.Component{
    constructor(props){
        super(props);
        switch (this.props.headerColor) {
            case 'orange':
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderOrange
                }
                break;
            case 'green':
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderGreen
                }
                break;
            case 'red':
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderRed
                }
                break;
            case 'blue':
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderBlue
                }
                break;
            default:
                this.state = {
                    headerColor: " " + this.props.classes.cardHeaderPurple
                }
            break;
        };
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
            <Card className={this.props.classes.card}>
                <CardHeader
                    classes={{
                        root: this.props.classes.cardHeader + this.state.headerColor,
                        title: this.props.classes.cardTitle,
                        subheader: this.props.classes.cardSubtitle,
                    }}
                    title={this.props.cardTitle}
                    subheader={this.props.cardSubtitle}
                />
                <CardContent>
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
                </CardContent>
            </Card>
        );
    }
}

TableCard.propTypes = {
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf(['orange','green','red','blue','purple']),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  tableHeaderColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableCardstyle)(TableCard);
