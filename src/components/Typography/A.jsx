import React from 'react';
import {
    withStyles
} from 'material-ui';
import PropTypes from 'prop-types';

import { typographyStyle } from 'variables/styles';

class A extends React.Component{
    render(){
        const {
            classes, link, text,
             ...rest
         } = this.props;
        return (
            <a {...rest} className={this.props.classes.defaultFontStyle + " " + this.props.classes.aStyle} href={this.props.link}>
                {this.props.text}
            </a>
        );
    }
}

A.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(typographyStyle)(A);
