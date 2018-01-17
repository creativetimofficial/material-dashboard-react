import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H3 extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <h3 className={classes.defaultFontStyle + " " + classes.h3Style + " " + classes.defaultHeaderMargins}>
                {children}
            </h3>
        );
    }
}

H3.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H3);
