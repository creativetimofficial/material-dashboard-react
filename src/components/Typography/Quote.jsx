import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class Quote extends React.Component{
    render(){
        const { classes, text, author } = this.props;
        return (
            <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
                <p className={classes.quoteText}>{text}</p>
                <small className={classes.quoteAuthor}>{author}</small>
            </blockquote>
        );
    }
}

Quote.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.node,
    author: PropTypes.node
}

export default withStyles(typographyStyle)(Quote);
