import React from 'react';
import {
    withStyles, Card, CardHeader, CardContent, CardActions, Typography
} from 'material-ui';
import PropTypes from 'prop-types';

import avatar from 'assets/img/faces/marc.jpg';

import { profileCardStyle } from 'variables/styles';

class ProfileCard extends React.Component{
    render(){
        return (
            <Card className={this.props.classes.card}>
                <CardHeader
                    classes={{
                        root: this.props.classes.cardHeader,
                        avatar: this.props.classes.cardAvatar,
                    }}
                    avatar={
                        <img src={avatar} alt="..." className={this.props.classes.img}/>
                    }
                />
                <CardContent className={this.props.classes.textAlign}>
                    {this.props.subtitle !== undefined ? (<Typography component="h6" className={this.props.classes.cardSubtitle}>
                        {this.props.subtitle}
                    </Typography>):null}
                    {this.props.title !== undefined ? (<Typography component="h4" className={this.props.classes.cardTitle}>
                        {this.props.title}
                    </Typography>):null}
                    {this.props.description !== undefined ? (<Typography component="p" className={this.props.classes.cardDescription}>
                        {this.props.description}
                    </Typography>):null}
                </CardContent>
                <CardActions className={this.props.classes.textAlign + " " + this.props.classes.cardActions}>
                    {this.props.footer}
                </CardActions>
            </Card>
        );
    }
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(profileCardStyle)(ProfileCard);
