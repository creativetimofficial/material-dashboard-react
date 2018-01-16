import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H6 extends React.Component{
    render(){
        return (
            <h6 className={this.props.classes.defaultFontStyle + " " + this.props.classes.h6Style + " " + this.props.classes.defaultHeaderMargins}>
                {this.props.children}
            </h6>
        );
    }
}

H6.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H6);
