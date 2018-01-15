import React from 'react';
import {
    withStyles, Card, CardHeader, CardContent, Typography
} from 'material-ui';
import PropTypes from 'prop-types';

import Button from 'components/CustomButtons/Button';

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
                    <Typography component="h6" className={this.props.classes.cardSubtitle}>
                        CEO / CO-FOUNDER
                    </Typography>
                    <Typography component="h4" className={this.props.classes.cardTitle}>
                        Alec Thompson
                    </Typography>
                    <Typography component="p" className={this.props.classes.cardDescription}>
                        Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                    </Typography>
                    <Button color="primary" round>Follow</Button>
                </CardContent>

            </Card>
        );
    }
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(profileCardStyle)(ProfileCard);
