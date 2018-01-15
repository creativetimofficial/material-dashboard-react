import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { defaultFontStyle } from 'variables/styles';

var p = defaultFontStyle.defaultFontStyle;

const styles = {
    p,
    style: {
        fontSize : '14px',
        margin: '0 0 10px'
    }
}

class P extends React.Component{
    render(){
        return (
            <p className={this.props.classes.p + " " + this.props.classes.style}>
                {this.props.children}
            </p>
        );
    }
}

P.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(P);
