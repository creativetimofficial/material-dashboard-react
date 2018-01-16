import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Muted extends React.Component{
    render(){
        return (
            <div className={this.props.classes.defaultFontStyle + " " + this.props.classes.mutedText}>
                {this.props.children}
            </div>
        );
    }
}

Muted.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Muted);
