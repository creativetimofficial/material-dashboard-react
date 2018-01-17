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
                className={classes.button + ( color ? " " + classes[color]:"")}
                >
                {children}
            </IconButton>
        );
    }
}

IconCustomButton.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['primary','info','success','warning','danger','rose','white','simple']),
};

export default withStyles(iconButtonStyle)(IconCustomButton);
