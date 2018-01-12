import React from 'react';
import {
    withStyles, Card, CardContent, CardHeader, CardActions, Grid, Typography
} from 'material-ui';
import PropTypes from 'prop-types';

import { statsCardStyle } from 'variables/styles';

class StatsCard extends React.Component{
    constructor(props){
        super(props);
        switch (this.props.iconColor) {
            case 'orange':
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderOrange
                }
                break;
            case 'green':
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderGreen
                }
                break;
            case 'red':
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderRed
                }
                break;
            case 'blue':
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderBlue
                }
                break;
            default:
                this.state = {
                    iconColor: " " + this.props.classes.cardHeaderPurple
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
            <Grid item sm={6} lg={3}>
                <Card className={this.props.classes.card}>
                    <CardHeader
                        classes={{
                            root: (this.props.classes.cardHeader+this.state.iconColor),
                            avatar: this.props.classes.cardAvatar
                        }}
                        avatar={
                            <this.props.icon className={this.props.classes.cardIcon}/>
                        }
                    />
                    <CardContent className={this.props.classes.cardContent}>
                        <Typography type="subheading" className={this.props.classes.cardCategory}>
                            {this.props.title}
                        </Typography>
                        <Typography type="headline" component="h2" className={this.props.classes.cardTitle}>
                            {this.props.description} {this.props.small !== undefined ? (<small className={this.props.classes.cardTitleSmall}>{this.props.small}</small>):null}
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
