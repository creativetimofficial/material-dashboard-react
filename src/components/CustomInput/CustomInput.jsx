import React from 'react';
import {
    withStyles, FormControl, InputLabel, Input
} from 'material-ui';
import PropTypes from 'prop-types';

import { customInputStyle } from 'variables/styles';

class CustomInput extends React.Component {
  render() {
    return (
        <FormControl {...this.props.formControlProps}>
            {this.props.labelText !== undefined ? (<InputLabel
                classes={{
                    root: this.props.classes.labelRoot,
                }}
                htmlFor={this.props.id}
                {...this.props.labelProps}
            >
                {this.props.labelText}
            </InputLabel>):null}
            <Input
                classes={{
                    disabled: this.props.classes.disabled,
                    underline: this.props.classes.underline,
                    inkbar: this.props.classes.inkbar,
                }}
                id={this.props.id}
                {...this.props.inputProps}
            />
        </FormControl>
    );
  }
}

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(customInputStyle)(CustomInput);
