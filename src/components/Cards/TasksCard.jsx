import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, Typography, Tabs, Tab,
} from 'material-ui';
import {
    BugReport, Code, Cloud
} from 'material-ui-icons';
import PropTypes from 'prop-types';

import { Tasks } from 'components';

import {
    bugs,
    website,
    server
} from 'variables/general';

import { tasksCardStyle } from 'variables/styles';

class TasksCard extends React.Component{
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render(){
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        root: (classes.cardHeader),
                        title: (classes.cardTitle),
                        content: (classes.cardHeaderContent)
                    }}
                    title="Tasks:"
                    action={
                        <Tabs
                            classes={{
                                flexContainer: classes.tabsContainer
                            }}
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorClassName={classes.displayNone}
                            textColor="inherit">
                            <Tab
                                classes={{
                                    wrapper: classes.tabWrapper,
                                    rootLabelIcon: classes.labelIcon,
                                    label: classes.label,
                                    rootInheritSelected: classes.rootInheritSelected
                                }}
                                icon={<BugReport className={classes.tabIcon}/>}
                                label={"Bugs"}/>
                            <Tab
                                classes={{
                                    wrapper: classes.tabWrapper,
                                    rootLabelIcon: classes.labelIcon,
                                    label: classes.label,
                                    rootInheritSelected: classes.rootInheritSelected
                                }}
                                icon={<Code className={classes.tabIcon}/>}
                                label={"Website"}/>
                            <Tab
                                classes={{
                                    wrapper: classes.tabWrapper,
                                    rootLabelIcon: classes.labelIcon,
                                    label: classes.label,
                                    rootInheritSelected: classes.rootInheritSelected
                                }}
                                icon={<Cloud className={classes.tabIcon}/>}
                                label={"Server"}/>
                        </Tabs>
                    }
                />
                <CardContent>
                    {
                        this.state.value === 0 && (
                            <Typography component="div">
                                <Tasks
                                    checkedIndexes={[0,3]}
                                    tasksIndexes={[0,1,2,3]}
                                    tasks={bugs}
                                />
                            </Typography>
                        )
                    }
                    {
                        this.state.value === 1 && (
                            <Typography component="div">
                                <Tasks
                                    checkedIndexes={[0]}
                                    tasksIndexes={[0,1]}
                                    tasks={website}
                                />
                            </Typography>
                        )
                    }
                    {
                        this.state.value === 2 && (
                            <Typography component="div">
                                <Tasks
                                    checkedIndexes={[1]}
                                    tasksIndexes={[0,1,2]}
                                    tasks={server}
                                />
                            </Typography>
                        )
                    }
                </CardContent>
            </Card>
        );
    }
}

TasksCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(tasksCardStyle)(TasksCard);
