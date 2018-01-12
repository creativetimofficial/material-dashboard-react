import React from 'react';
import {
    withStyles, Card, CardHeader, CardContent, Typography
} from 'material-ui';
import PropTypes from 'prop-types';

import Button from 'components/CustomButtons/Button';

import avatar from 'assets/img/faces/marc.jpg';

const styles = {
    card: {
        // this is for user card
        marginTop: '30px',
        textAlign: 'center',
        // this is like all other Cards
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
        display: 'inline-block',
        width: '100%',
        padding: '0px',
    },
    cardAvatar: {
        maxWidth: '130px',
        maxHeight: '130px',
        margin: '-50px auto 0',
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    },
    img: {
        width: '100%',
        height: 'auto',
        verticalAlign: 'middle',
        border: '0',
    },
    textAlign: {
        textAlign: 'center'
    },
    cardSubtitle: {
        color: '#999999',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '1em',
        textTransform: 'uppercase',
        marginTop: '10px',
        marginBottom: '10px',
    },
    cardTitle: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        fontSize: '1.3em',
        marginTop: '10px',
        marginBottom: '10px',
    },
    cardDescription: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '300',
        lineHeight: '1.5em',
        padding: '15px 20px',
        margin: '0 0 10px',
    }
};


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

export default withStyles(styles)(ProfileCard);
