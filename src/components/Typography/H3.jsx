import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { defaultHeadersStyles } from 'variables/styles';

var h3 = defaultHeadersStyles.defaultHeadersStyles;

const styles = {
    h3,
    style: {
        fontSize : '1.825em',
    }
}

class H3 extends React.Component{
    render(){
        return (
            <h3 className={this.props.classes.h3 + " " + this.props.classes.style}>
                {this.props.children}
            </h3>
        );
    }
}

H3.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(H3);
