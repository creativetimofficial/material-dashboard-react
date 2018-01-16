import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H5 extends React.Component{
    render(){
        return (
            <h5 className={ this.props.classes.defaultFontStyle + " " + this.props.classes.h5Style + " " +this.props.classes.defaultHeaderMargins}>
                {this.props.children}
            </h5>
        );
    }
}

H5.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H5);
