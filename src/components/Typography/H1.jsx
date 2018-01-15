import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { defaultHeadersStyles } from 'variables/styles';

var h1 = defaultHeadersStyles.defaultHeadersStyles;

const styles = {
    h1,
    style: {
        fontSize : '3.8em',
    }
}

class H1 extends React.Component{
    render(){
        return (
            <h1 className={this.props.classes.h1 + " " + this.props.classes.style}>
                {this.props.children}
            </h1>
        );
    }
}

H1.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(H1);
