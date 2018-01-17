import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H5 extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <h5 className={ classes.defaultFontStyle + " " + classes.h5Style + " " +classes.defaultHeaderMargins}>
                {children}
            </h5>
        );
    }
}

H5.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H5);
