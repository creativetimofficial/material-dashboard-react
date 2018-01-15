import React from 'react';
import {
    withStyles, Button
} from 'material-ui';
import PropTypes from 'prop-types';

import { buttonStyle } from 'variables/styles';

class RegularButton extends React.Component{
    render(){
        const { classes, color, round, children, ...rest } = this.props ;
        return (
            <Button
                {...rest}
                className={classes.button + ( color !== undefined ? " " + classes[color]:"") + ( round ? " " + classes.round:"")}
                >
                {children}
            </Button>
        );
    }
}

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(buttonStyle)(RegularButton);
