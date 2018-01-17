import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Danger extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <div className={classes.defaultFontStyle + " " + classes.dangerText}>
                {children}
            </div>
        );
    }
}

Danger.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Danger);
