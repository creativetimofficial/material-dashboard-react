import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class H4 extends React.Component{
    render(){
        return (
            <h4 className={this.props.classes.defaultFontStyle + " " + this.props.classes.h4Style + " " + this.props.classes.defaultHeaderMargins}>
                {this.props.children}
            </h4>
        );
    }
}

H4.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(H4);
