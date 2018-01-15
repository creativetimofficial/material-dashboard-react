import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { defaultFontStyle } from 'variables/styles';

var quote = defaultFontStyle.defaultFontStyle;

const styles = {
    quote,
    style: {
        padding: '10px 20px',
        margin: '0 0 20px',
        fontSize: '17.5px',
        borderLeft: '5px solid #eee',
    },
    p: {
        margin: '0 0 10px',
        fontStyle: 'italic'
    },
    small: {
        display: 'block',
        fontSize: '80%',
        lineHeight: '1.42857143',
        color: '#777',
    }
}

class Quote extends React.Component{
    render(){
        return (
            <blockquote className={this.props.classes.quote + " " + this.props.classes.style}>
                <p className={this.props.classes.p}>{this.props.text}</p>
                <small className={this.props.classes.small}>{this.props.author}</small>
            </blockquote>
        );
    }
}

Quote.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Quote);
