import React from 'react';
import {
    withStyles, FormControl, InputLabel, Input
} from 'material-ui';
import PropTypes from 'prop-types';

import { customInputStyle } from 'variables/styles';

class CustomInput extends React.Component {
  render() {
      const { classes, formControlProps, labelText, id, labelProps, inputProps } = this.props;
    return (
        <FormControl {...formControlProps}>
            {labelText !== undefined ? (<InputLabel
                classes={{
                    root: classes.labelRoot,
                }}
                htmlFor={id}
                {...labelProps}
            >
                {labelText}
            </InputLabel>):null}
            <Input
                classes={{
                    disabled: classes.disabled,
                    underline: classes.underline,
                    inkbar: classes.inkbar,
                }}
                id={id}
                {...inputProps}
            />
        </FormControl>
    );
  }
}

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object
}

export default withStyles(customInputStyle)(CustomInput);
