import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { defaultHeadersStyles } from 'variables/styles';

var h5 = defaultHeadersStyles.defaultHeadersStyles;

const styles = {
    h5,
    style: {
        fontSize: '1.25em'
    }
}

class H5 extends React.Component{
    render(){
        return (
            <h5 className={this.props.classes.h5 + " " + this.props.classes.style}>
                {this.props.children}
            </h5>
        );
    }
}

H5.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(H5);
