import React from 'react';
import {
    withStyles, IconButton
} from 'material-ui';
import PropTypes from 'prop-types';

import { iconButtonStyle } from 'variables/styles';

class IconCustomButton extends React.Component{
    render(){
        const { classes, color, children, ...rest } = this.props ;
        return (
            <IconButton
                {...rest}
                className={classes.button + ( color !== undefined ? " " + classes[color]:"")}
                >
                {children}
            </IconButton>
        );
    }
}

IconCustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(iconButtonStyle)(IconCustomButton);
