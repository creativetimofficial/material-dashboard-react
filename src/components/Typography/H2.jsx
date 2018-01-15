import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { defaultHeadersStyles } from 'variables/styles';

var h2 = defaultHeadersStyles.defaultHeadersStyles;

const styles = {
    h2,
    style: {
        fontSize : '2.6em',
    }
}

class H2 extends React.Component{
    render(){
        return (
            <h2 className={this.props.classes.h2 + " " + this.props.classes.style}>
                {this.props.children}
            </h2>
        );
    }
}

H2.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(H2);
