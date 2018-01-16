import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from 'material-ui';

import { typographyStyle } from 'variables/styles';

class Info extends React.Component{
    render(){
        return (
            <div className={this.props.classes.defaultFontStyle + " " + this.props.classes.infoText}>
                {this.props.children}
            </div>
        );
    }
}

Info.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Info);
