import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H4 extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <h4 className={classes.defaultFontStyle + " " + classes.h4Style + " " + classes.defaultHeaderMargins}>
                {children}
            </h4>
        );
    }
}

H4.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H4);
