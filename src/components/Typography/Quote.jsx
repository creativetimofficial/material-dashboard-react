import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class Quote extends React.Component{
    render(){
        return (
            <blockquote className={this.props.classes.defaultFontStyle + " " + this.props.classes.quote}>
                <p className={this.props.classes.quoteText}>{this.props.text}</p>
                <small className={this.props.classes.quoteAuthor}>{this.props.author}</small>
            </blockquote>
        );
    }
}

Quote.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(Quote);
