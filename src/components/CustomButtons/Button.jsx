import React from 'react';
import {
    withStyles, Button
} from 'material-ui';
import PropTypes from 'prop-types';

const styles = {
    button: {
        backgroundColor: '#999999',
        color: '#FFFFFF',
        boxShadow: '0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)',
        border: 'none',
        borderRadius: '3px',
        position: 'relative',
        padding: '12px 30px',
        margin: '10px 1px',
        fontSize: '12px',
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: '0',
        willChange: 'box-shadow, transform',
        transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        lineHeight: '1.42857143',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        MsTouchAction: 'manipulation',
        touchAction: 'manipulation',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#999999',
            boxShadow: '0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)'
        }
    },
    primary: {
        backgroundColor: '#9c27b0',
        boxShadow: '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
        '&:hover': {
            backgroundColor: '#9c27b0',
            boxShadow: '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
        }
    },
    info: {
        backgroundColor: '#00bcd4',
        boxShadow: '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
        '&:hover': {
            backgroundColor: '#00bcd4',
            boxShadow: '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
        }
    },
    success: {
        backgroundColor: '#4caf50',
        boxShadow: '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
        '&:hover': {
            backgroundColor: '#4caf50',
            boxShadow: '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
        }
    },
    warning: {
        backgroundColor: '#ff9800',
        boxShadow: '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
        '&:hover': {
            backgroundColor: '#ff9800',
            boxShadow: '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
        }
    },
    danger: {
        backgroundColor: '#f44336',
        boxShadow: '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
        '&:hover': {
            backgroundColor: '#f44336',
            boxShadow: '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
        }
    },
    rose: {
        backgroundColor: '#e91e63',
        boxShadow: '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
        '&:hover': {
            backgroundColor: '#e91e63',
            boxShadow: '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
        }
    },
    white: {
        '&,&:focus,&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#999999'
        }
    },
    simple: {
        color: '#FFFFFF',
        background: 'transparent',
        boxShadow: 'none',
    },
    round: {
        borderRadius: '30px',
    }
}

class RegularButton extends React.Component{
    render(){
        return (
            <Button
                className={this.props.classes.button + ( this.props.color !== undefined ? " " +this.props.classes[this.props.color]:"") + ( this.props.round ? " " +this.props.classes.round:"")}
                >
                {this.props.children}
            </Button>
        );
    }
}

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegularButton);
