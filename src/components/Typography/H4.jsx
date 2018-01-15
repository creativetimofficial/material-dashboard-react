import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { defaultHeadersStyles } from 'variables/styles';

var h4 = defaultHeadersStyles.defaultHeadersStyles;

const styles = {
    h4,
    style: {
        fontSize: '1.3em'
    }
}

class H4 extends React.Component{
    render(){
        return (
            <h4 className={this.props.classes.h4 + " " + this.props.classes.style}>
                {this.props.children}
            </h4>
        );
    }
}

H4.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(H4);
