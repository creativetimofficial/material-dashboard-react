import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, CardActions, Typography
} from 'material-ui';
import PropTypes from 'prop-types';

import { statsCardStyle } from 'variables/styles';

class StatsCard extends React.Component{
    render(){
        const { classes, title, description, statLink, small, statText, statIconColor, iconColor } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        root: (classes.cardHeader + " " + classes[iconColor+"CardHeader"]),
                        avatar: classes.cardAvatar
                    }}
                    avatar={
                        <this.props.icon className={classes.cardIcon}/>
                    }
                />
                <CardContent className={classes.cardContent}>
                    <Typography component="p" className={classes.cardCategory}>
                        {title}
                    </Typography>
                    <Typography type="headline" component="h2" className={classes.cardTitle}>
                        {description} {small !== undefined ? (<small className={classes.cardTitleSmall}>{small}</small>):null}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.cardStats}>
                        <this.props.statIcon className={classes.cardStatsIcon + " " + classes[statIconColor+"CardStatsIcon"]} />{' '}
                        {statLink !== undefined ? (<a href={statLink.href} className={classes.cardStatsLink}>{statLink.text}</a>):(statText !== undefined ? (statText):null)}
                    </div>
                </CardActions>
            </Card>
        );
    }
}

StatsCard.defaultProps = {
    iconColor: 'purple',
    statIconColor: 'gray'
};

StatsCard.propTypes = {
    classes: PropTypes.object.isRequired,
    icon: PropTypes.func.isRequired,
    iconColor: PropTypes.oneOf(['orange','green','red','blue','purple']),
    title: PropTypes.node,
    description: PropTypes.node,
    small: PropTypes.node,
    statIcon: PropTypes.func.isRequired,
    statIconColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
    statLink: PropTypes.object,
    statText: PropTypes.node
};

export default withStyles(statsCardStyle)(StatsCard);
