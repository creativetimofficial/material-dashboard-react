import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H3 extends React.Component{
    render(){
        return (
            <h3 className={this.props.classes.defaultFontStyle + " " + this.props.classes.h3Style + " " + this.props.classes.defaultHeaderMargins}>
                {this.props.children}
            </h3>
        );
    }
}

H3.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H3);
