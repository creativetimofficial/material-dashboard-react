import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { defaultHeadersStyles } from 'variables/styles';

var h6 = defaultHeadersStyles.defaultHeadersStyles;

const styles = {
    h6,
    style: {
        fontSize: '1em'
    }
}

class H6 extends React.Component{
    render(){
        return (
            <h6 className={this.props.classes.h6 + " " + this.props.classes.style}>
                {this.props.children}
            </h6>
        );
    }
}

H6.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(H6);
