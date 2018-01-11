import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, CardActions, Grid, Typography, AppBar, Tabs, Tab, Checkbox, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Toolbar, Button
} from 'material-ui';
import {
    ContentCopy, Store, InfoOutline, Warning, DateRange, LocalOffer, Update, ArrowUpward, AccessTime, Edit, Close, BugReport, Cloud, Code, Accessibility
} from 'material-ui-icons';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import Tasks from 'components/Tasks/Tasks';

var bugs = ['Sign contract for "What are conference organizers afraid of?"','Lines From Great Russian Literature? Or E-mails From My Boss?','Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Create 4 Invisible User Experiences you Never Knew About'];
var website = ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Sign contract for "What are conference organizers afraid of?"'];
var server = ['Lines From Great Russian Literature? Or E-mails From My Boss?','Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Sign contract for "What are conference organizers afraid of?"'];

const styles = {
    card: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        margin: '25px 0',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        borderRadius: '3px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
    },
    cardHeader: {
        flex: 'none',
        padding: '15px',
        margin: '-20px 15px 0',
        borderRadius: '3px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
    },
    cardTitle: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        float: 'left',
        padding: '10px 10px 10px 0',
        lineHeight: '24px',
        fontSize: '14px',
        color: '#FFFFFF',
    },
    tabWrapper: {
        width: 'auto',
        display: 'inline-block',
        alignItems: 'inherit',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tabIcon:{
        float: 'left',
        marginTop: '2px',
    },
    displayNone: {
        display: 'none',
    },
    labelIcon: {
        height: '44px',
        width: '110px',
        minWidth: '72px',
        paddingLeft: '14px',
        borderRadius: '3px',
    },
    tabsContainer: {
        marginTop: '4px',
        color: '#FFFFFF',
    },
    tabs: {
        width: '110px',
        minWidth: '70px',
        paddingLeft: '12px',
    },
    cardHeaderContent: {
        flex: 'none',
    },
    label: {
        lineHeight: '19px',
        textTransform: 'uppercase',
        fontSize: '12px',
        fontWeight: '400',
        marginLeft: '5px'
    },
    rootInheritSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        transition: 'background-color .1s .2s',
    },
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

class TasksCard extends React.Component{
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
            <Grid item lg={6}>
                <Card className={this.props.classes.card}>
                    <CardHeader
                        classes={{
                            root: (this.props.classes.cardHeader),
                            title: (this.props.classes.cardTitle),
                            content: (this.props.classes.cardHeaderContent)
                        }}
                        title="Tasks:"
                        action={
                            <Tabs
                                classes={{
                                    flexContainer: this.props.classes.tabsContainer
                                }}
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorClassName={this.props.classes.displayNone}
                                textColor="inherit">
                                <Tab
                                    classes={{
                                        wrapper: this.props.classes.tabWrapper,
                                        rootLabelIcon: this.props.classes.labelIcon,
                                        label: this.props.classes.label,
                                        rootInheritSelected: this.props.classes.rootInheritSelected
                                    }}
                                    icon={<BugReport className={this.props.classes.tabIcon}/>}
                                    label={"Bugs"}/>
                                <Tab
                                    classes={{
                                        wrapper: this.props.classes.tabWrapper,
                                        rootLabelIcon: this.props.classes.labelIcon,
                                        label: this.props.classes.label,
                                        rootInheritSelected: this.props.classes.rootInheritSelected
                                    }}
                                    icon={<Code className={this.props.classes.tabIcon}/>}
                                    label={"Website"}/>
                                <Tab
                                    classes={{
                                        wrapper: this.props.classes.tabWrapper,
                                        rootLabelIcon: this.props.classes.labelIcon,
                                        label: this.props.classes.label,
                                        rootInheritSelected: this.props.classes.rootInheritSelected
                                    }}
                                    icon={<Cloud className={this.props.classes.tabIcon}/>}
                                    label={"Server"}/>
                            </Tabs>
                        }
                    />
                    <CardContent>
                        <SwipeableViews
                            axis={'x'}
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}>
                            <Typography component="div">
                                <Tasks />
                            </Typography>
                            <Typography component="div">
                                <Table>
                                    <TableBody>
                                        {
                                            [0,1].map(value => (
                                                <TableRow key={value}>
                                                    <TableCell>
                                                        <Checkbox
                                                            checked={this.state.checkedWebsite.indexOf(value) !== -1}
                                                            tabIndex={-1}
                                                            disableRipple
                                                            onClick={this.handleWebsiteToggle(value)}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        {website[value]}
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton aria-label="Edit">
                                                            <Edit />
                                                        </IconButton>
                                                        <IconButton aria-label="Close">
                                                            <Close />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Typography>
                            <Typography component="div">
                                <Table>
                                    <TableBody>
                                        {
                                            [0,1,2].map(value => (
                                                <TableRow key={value}>
                                                    <TableCell>
                                                        <Checkbox
                                                            checked={this.state.checkedServer.indexOf(value) !== -1}
                                                            tabIndex={-1}
                                                            disableRipple
                                                            onClick={this.handleServerToggle(value)}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        {server[value]}
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton aria-label="Edit">
                                                            <Edit />
                                                        </IconButton>
                                                        <IconButton aria-label="Close">
                                                            <Close />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Typography>
                        </SwipeableViews>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

TasksCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TasksCard);
