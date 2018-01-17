import React from 'react';
import {
    withStyles, Snackbar as Snack, IconButton
} from 'material-ui';
import { Close } from 'material-ui-icons';
import PropTypes from 'prop-types';

import { snackbarContentStyle } from 'variables/styles';

class Snackbar extends React.Component{
    render(){
        const { classes, message, color, close, icon } = this.props;
        var action = [];
        if(close !== undefined){
            action = [
                <IconButton
                    className={classes.iconButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => this.props.closeNotification()}>
                    <Close className={classes.close}/>
                </IconButton>
            ];
        }
        return (
            <Snack
                anchorOrigin={{
                    vertical: this.props.place.indexOf("t") === -1 ? "bottom":"top",
                    horizontal: this.props.place.indexOf("l") !== -1 ? "left":this.props.place.indexOf("c") !== -1 ? "center":"right"
                }}
                open={this.props.open}
                message={
                    <div>
                        {icon !== undefined ?  (<this.props.icon className={classes.icon}/>):null}
                        <span className={(icon!==undefined?classes.iconMessage:"")}>{message}</span>
                    </div>
                }
                action={action}
                SnackbarContentProps={{
                    classes: {
                        root: classes.root + " " + classes[color],
                        message: classes.message
                    }
                }}
            />
        );
    }
}

Snackbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(snackbarContentStyle)(Snackbar);
