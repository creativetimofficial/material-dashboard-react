import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, CardActions, Grid, Typography
} from 'material-ui';
import PropTypes from 'prop-types';

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
        padding: '0',
        minHeight: '160px',
        margin: '-20px 15px 0',
        borderRadius: '3px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
    },
    cardHeaderOrange: {
        background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
    },
    cardHeaderGreen: {
        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
    },
    cardHeaderRed: {
        background: 'linear-gradient(60deg, #ef5350, #e53935)',
        boxShadow: '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
    },
    cardHeaderBlue: {
        background: 'linear-gradient(60deg, #26c6da, #00acc1)',
        boxShadow: '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
    },
    cardHeaderPurple: {
        background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
        boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
    },
    cardContent: {
        padding: '15px 20px',
    },
    cardTitle: {
        marginTop: '0',
        marginBottom: '5px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '1.175em',
    },
    cardCategory: {
        marginBottom: '0',
        color: '#999999',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '0.9em',
    },
    cardActions: {
        margin: '0 20px 10px',
        paddingTop: '10px',
        borderTop: '1px solid #eeeeee',
        height: 'auto',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
    },
    cardStats: {
        lineHeight: '22px',
        color: '#999999',
        fontSize: '12px',
        display: 'inline-block',
    },
    cardStatsIcon: {
        position: 'relative',
        top: '4px',
        width: '16px',
        height: '16px',
    },
    cardStatsIconWarning: {
        color: '#ff9800',
    },
    cardStatsIconPrimary: {
        color: '#9c27b0',
    },
    cardStatsIconDanger: {
        color: '#f44336',
    },
    cardStatsIconSuccess: {
        color: '#4caf50',
    },
    cardStatsIconInfo: {
        color: '#00bcd4',
    },
    cardStatsIconRose: {
        color: '#e91e63',
    },
    cardStatsIconGray: {
        color: '#999999',
    },
    cardStatsLink: {
        color: '#9c27b0',
        textDecoration: 'none',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
    }
};

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

export default withStyles(styles)(ChartCard);
