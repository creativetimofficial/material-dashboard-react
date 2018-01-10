import React from 'react';
import {
    Card, CardContent, CardHeader, CardActions, Grid, Typography, AppBar, Tabs, Tab, Checkbox, IconButton, Table, TableBody, TableCell, TableRow, TableHead, Toolbar
} from 'material-ui';
import {
    ContentCopy, Store, InfoOutline, Warning, DateRange, LocalOffer, Update, ArrowUpward, AccessTime, Edit, Close, BugReport, Cloud, Code, Accessibility
} from 'material-ui-icons';
import SwipeableViews from 'react-swipeable-views';

import StatsCard from 'components/Cards/StatsCard';
import ChartCard from 'components/Cards/ChartCard';

var bugs = ['Sign contract for "What are conference organizers afraid of?"','Lines From Great Russian Literature? Or E-mails From My Boss?','Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Create 4 Invisible User Experiences you Never Knew About'];
var website = ['Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Sign contract for "What are conference organizers afraid of?"'];
var server = ['Lines From Great Russian Literature? Or E-mails From My Boss?','Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit','Sign contract for "What are conference organizers afraid of?"'];

class Dashboard extends React.Component{
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
            <div>
                <Grid container>
                    <StatsCard
                        icon={ContentCopy}
                        iconColor="orange"
                        title="Used Space"
                        description="49/50"
                        small="GB"
                        statIcon={Warning}
                        statIconColor="danger"
                        statLink={{text: "Get More Space...", href:"#pablo"}}
                    />
                    <StatsCard
                        icon={Store}
                        iconColor="green"
                        title="Revenue"
                        description="$34,245"
                        statIcon={DateRange}
                        statText="Last 24 Hours"
                    />
                    <StatsCard
                        icon={InfoOutline}
                        iconColor="red"
                        title="Fixed Issues"
                        description="75"
                        statIcon={LocalOffer}
                        statText="Tracked from Github"
                    />
                    <StatsCard
                        icon={Accessibility}
                        iconColor="blue"
                        title="Followers"
                        description="+245"
                        statIcon={Update}
                        statText="Just Updated"
                    />
                </Grid>
                <Grid container>
                    <ChartCard />
                    <Grid item md={4}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <div>
                                        Chart here
                                    </div>
                                }
                            />
                            <CardContent>
                                <Typography type="title" component="h4">
                                    Daily Sales
                                </Typography>
                                <Typography type="category" component="p">
                                    <ArrowUpward /> 55% increase in today sales.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <AccessTime /> <p>updated 4 minutes ago</p>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <div>
                                        Chart here
                                    </div>
                                }
                            />
                            <CardContent>
                                <Typography type="title" component="h4">
                                    Email Subscriptions
                                </Typography>
                                <Typography type="category" component="p">
                                    Last Campaign Performance
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <AccessTime /> <p></p>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <div>
                                        Chart here
                                    </div>
                                }
                            />
                            <CardContent>
                                <Typography type="title" component="h4">
                                    Completed Tasks
                                </Typography>
                                <Typography type="category" component="p">
                                    Last Campaign Performance
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <AccessTime /> <p></p>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={6}>
                        <Card>
                            <CardContent>
                                <AppBar position="static" color="default">
                                    <Toolbar>
                                        <Typography type="title" color="inherit">
                                            Title
                                        </Typography>
                                        <Tabs
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            fullWidth>
                                            <Tab label={
                                                <div>
                                                    <BugReport /> Bugs
                                                </div>
                                            }/>
                                            <Tab label={
                                                <div>
                                                    <Code /> Website
                                                </div>
                                            }/>
                                            <Tab label={
                                                <div>
                                                    <Cloud /> Server
                                                </div>
                                            }/>
                                        </Tabs>
                                    </Toolbar>
                                </AppBar>
                                <SwipeableViews
                                    axis={'x'}
                                    index={this.state.value}
                                    onChangeIndex={this.handleChangeIndex}>
                                    <Typography component="div">
                                        <Table>
                                            <TableBody>
                                                {
                                                    [0,1,2,3].map(value => (
                                                        <TableRow key={value}>
                                                            <TableCell>
                                                                <Checkbox
                                                                    checked={this.state.checkedBugs.indexOf(value) !== -1}
                                                                    tabIndex={-1}
                                                                    disableRipple
                                                                    onClick={this.handleBugsToggle(value)}
                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                {bugs[value]}
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
                    <Grid item lg={6}>
                        <Card>
                            <CardHeader
                                title={"Employees Stats"}
                                subheader={"New employees on 15th September, 2016"}
                            />
                            <CardContent>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Salary</TableCell>
                                            <TableCell>Country</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>1</TableCell>
                                            <TableCell>Dakota Rice</TableCell>
                                            <TableCell>$36,738</TableCell>
                                            <TableCell>Niger</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>2</TableCell>
                                            <TableCell>Minerva Hooper</TableCell>
                                            <TableCell>$23,789</TableCell>
                                            <TableCell>Curaçao</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>3</TableCell>
                                            <TableCell>Sage Rodriguez</TableCell>
                                            <TableCell>$56,142</TableCell>
                                            <TableCell>Netherlands</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>4</TableCell>
                                            <TableCell>Philip Chaney</TableCell>
                                            <TableCell>$38,735</TableCell>
                                            <TableCell>Korea, South</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
