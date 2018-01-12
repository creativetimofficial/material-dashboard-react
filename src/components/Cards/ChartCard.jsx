import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, CardActions, Grid, Typography
} from 'material-ui';
import PropTypes from 'prop-types';

import { chartCardStyle } from 'variables/styles';

class ChartCard extends React.Component{
    constructor(props){
        super(props);
        switch (this.props.chartColor) {
            case 'orange':
                this.state = {
                    chartColor: " " + this.props.classes.cardHeaderOrange
                }
                break;
            case 'green':
                this.state = {
                    chartColor: " " + this.props.classes.cardHeaderGreen
                }
                break;
            case 'red':
                this.state = {
                    chartColor: " " + this.props.classes.cardHeaderRed
                }
                break;
            case 'blue':
                this.state = {
                    chartColor: " " + this.props.classes.cardHeaderBlue
                }
                break;
            default:
                this.state = {
                    chartColor: " " + this.props.classes.cardHeaderPurple
                }
            break;
        };
        switch (this.props.statIconColor) {
            case 'warning':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconWarning
                break;
            case 'primary':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconPrimary
                break;
            case 'danger':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconDanger
                break;
            case 'success':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconSuccess
                break;
            case 'info':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconInfo
                break;
            case 'rose':
                this.state.statIconColor = " " + this.props.classes.cardStatsIconRose
                break;
            default:
                this.state.statIconColor = " " + this.props.classes.cardStatsIconGray
            break;
        }
    }
    render(){
        return (
            <Grid item md={4}>
                <Card className={this.props.classes.card}>
                    <CardHeader
                        classes={{
                            root: (this.props.classes.cardHeader + this.state.chartColor),
                        }}
                        subheader={
                            this.props.chart
                        }
                    />
                    <CardContent className={this.props.classes.cardContent}>
                        <Typography type="title" component="h4" className={this.props.classes.cardTitle}>
                            {this.props.title}
                        </Typography>
                        <Typography type="category" component="p" className={this.props.classes.cardCategory}>
                            {this.props.text}
                        </Typography>
                    </CardContent>
                    <CardActions className={this.props.classes.cardActions}>
                        <div className={this.props.classes.cardStats}>
                            <this.props.statIcon className={this.props.classes.cardStatsIcon + this.state.statIconColor} />{' '}
                            {this.props.statLink !== undefined ? (<a href={this.props.statLink.href} className={this.props.classes.cardStatsLink}>{this.props.statLink.text}</a>):(this.props.statText !== undefined ? (this.props.statText):null)}
                        </div>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

ChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
  chart: PropTypes.object.isRequired,
  title: PropTypes.node,
  text: PropTypes.node,
  statIcon: PropTypes.func.isRequired,
  statIconColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
  statLink: PropTypes.object,
  statText: PropTypes.node
};

export default withStyles(chartCardStyle)(ChartCard);
