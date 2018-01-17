import React from 'react';
import {
    withStyles, SnackbarContent as Snack, IconButton
} from 'material-ui';
import { Close } from 'material-ui-icons';
import PropTypes from 'prop-types';

import { snackbarContentStyle } from 'variables/styles';

class SnackbarContent extends React.Component{
    render(){
        const { classes, message, color, close, icon } = this.props;
        var action = [];
        if(close !== undefined){
            action = [
                <IconButton
                    className={classes.iconButton}
                    key="close"
                    aria-label="Close"
                    color="inherit">
                    <Close className={classes.close}/>
                </IconButton>
            ];
        }
        return (
            <Snack
                message={
                    <div>
                        {icon !== undefined ?  (<this.props.icon className={classes.icon}/>):null}
                        <span className={(icon!==undefined?classes.iconMessage:"")}>{message}</span>
                    </div>
                }
                classes={{
                    root: classes.root + " " + classes[color],
                    message: classes.message
                }}
                action={action}
            />
        );
    }
}

SnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['info','success','warning','danger','primary']),
    close: PropTypes.bool,
    icon: PropTypes.func,
};

export default withStyles(snackbarContentStyle)(SnackbarContent);
