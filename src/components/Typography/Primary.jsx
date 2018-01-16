import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Primary extends React.Component{
    render(){
        return (
            <div className={this.props.classes.defaultFontStyle + " " + this.props.classes.primaryText}>
                {this.props.children}
            </div>
        );
    }
}

Primary.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Primary);
