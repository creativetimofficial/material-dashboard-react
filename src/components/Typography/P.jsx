import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class P extends React.Component{
    render(){
        return (
            <p className={this.props.classes.defaultFontStyle + " " + this.props.classes.pStyle}>
                {this.props.children}
            </p>
        );
    }
}

P.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(P);
