import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H2 extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <h2 className={classes.defaultFontStyle + " " + classes.h2Style + " " + classes.defaultHeaderMargins}>
                {children}
            </h2>
        );
    }
}

H2.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H2);
