import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class A extends React.Component{
    render(){
        const {
            classes, children,
             ...rest
         } = this.props;
        return (
            <a {...rest} className={classes.defaultFontStyle + " " + classes.aStyle}>
                {children}
            </a>
        );
    }
}

A.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(A);
