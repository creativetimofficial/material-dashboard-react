import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Muted extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <div className={classes.defaultFontStyle + " " + classes.mutedText}>
                {children}
            </div>
        );
    }
}

Muted.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Muted);
