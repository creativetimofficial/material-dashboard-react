import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Small extends React.Component{
    render(){
        return (
            <div className={this.props.classes.defaultFontStyle + " " + this.props.classes.smallText}>
                {this.props.children}
            </div>
        );
    }
}

Small.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Small);
