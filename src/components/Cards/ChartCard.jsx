import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, CardActions, Grid, Typography
} from 'material-ui';
import PropTypes from 'prop-types';

import { chartCardStyle } from 'variables/styles';

class ChartCard extends React.Component{
    render(){
        const { classes, chartColor, statIconColor, chart, title, text, statLink, statText } = this.props;
        return (
            <Grid item xs={12} sm={12} md={4}>
                <Card className={classes.card}>
                    <CardHeader
                        classes={{
                            root: (classes.cardHeader + " " + classes[chartColor+"Chart"]),
                        }}
                        subheader={chart}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography type="title" component="h4" className={classes.cardTitle}>
                            {title}
                        </Typography>
                        <Typography type="category" component="p" className={classes.cardCategory}>
                            {text}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <div className={classes.cardStats}>
                            <this.props.statIcon className={classes.cardStatsIcon + " " + classes[statIconColor+"CardStatsIcon"]} />{' '}
                            {statLink !== undefined ? (<a href={statLink.href} className={classes.cardStatsLink}>{statLink.text}</a>):(statText !== undefined ? (statText):null)}
                        </div>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

ChartCard.defaultProps = {
  statIconColor: 'gray',
  chartColor: 'purple'
};

ChartCard.propTypes = {
    classes: PropTypes.object.isRequired,
    chart: PropTypes.object.isRequired,
    title: PropTypes.node,
    text: PropTypes.node,
    statIcon: PropTypes.func.isRequired,
    statIconColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
    chartColor: PropTypes.oneOf(['orange','green','red','blue','purple']),
    statLink: PropTypes.object,
    statText: PropTypes.node
};

export default withStyles(chartCardStyle)(ChartCard);
