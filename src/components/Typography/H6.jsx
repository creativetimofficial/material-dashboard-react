import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H6 extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <h6 className={classes.defaultFontStyle + " " + classes.h6Style + " " + classes.defaultHeaderMargins}>
                {children}
            </h6>
        );
    }
}

H6.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H6);
