import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Primary extends React.Component{
    render(){
        const { classes, children } = this.props;
        return (
            <div className={classes.defaultFontStyle + " " + classes.primaryText}>
                {children}
            </div>
        );
    }
}

Primary.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Primary);
