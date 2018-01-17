import React from 'react';
import {
    withStyles, Button
} from 'material-ui';
import PropTypes from 'prop-types';

import { buttonStyle } from 'variables/styles';

class RegularButton extends React.Component{
    render(){
        const { classes, color, round, children, fullWidth, ...rest } = this.props ;
        return (
            <Button
                {...rest}
                className={classes.button + ( color ? " " + classes[color]:"") + ( round ? " " + classes.round:"") + (fullWidth ? " " + classes.fullWidth:"")}
                >
                {children}
            </Button>
        );
    }
}

RegularButton.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['primary','info','success','warning','danger','rose','white','simple']),
    round: PropTypes.bool,
    fullWidth: PropTypes.bool,
};

export default withStyles(buttonStyle)(RegularButton);
