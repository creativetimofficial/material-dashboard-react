import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, Typography, Tabs, Tab,
} from 'material-ui';
import {
    BugReport, Code, Cloud
} from 'material-ui-icons';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import Tasks from 'components/Tasks/Tasks';

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

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    render(){
        return (
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
