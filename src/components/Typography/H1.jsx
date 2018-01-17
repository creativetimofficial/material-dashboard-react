import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H1 extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <h1 className={classes.defaultFontStyle + " " + classes.h1Style + " " + classes.defaultHeaderMargins}>
                {children}
            </h1>
        );
    }
}

H1.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H1);
