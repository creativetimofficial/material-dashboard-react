import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H2 extends React.Component{
    render(){
        return (
            <h2 className={this.props.classes.defaultFontStyle + " " + this.props.classes.h2Style + " " + this.props.classes.defaultHeaderMargins}>
                {this.props.children}
            </h2>
        );
    }
}

H2.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H2);
