import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H1 extends React.Component{
    render(){
        return (
            <h1 className={this.props.classes.defaultFontStyle + " " + this.props.classes.h1Style + " " + this.props.classes.defaultHeaderMargins}>
                {this.props.children}
            </h1>
        );
    }
}

H1.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H1);
