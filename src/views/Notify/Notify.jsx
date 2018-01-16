import React from 'react';
import {
    Grid, Snackbar, IconButton
} from 'material-ui';
import {
    Close, AddAlert
} from 'material-ui-icons';

import {
    RegularCard, A, P, H5, Small, Button, SnackbarContent
} from 'components';

class Notifications extends React.Component{
    render(){
        return (
            <div>
                <SnackbarContent
                    message={'This is a plain notification.'}
                />
                <br />
                <SnackbarContent
                    color="info"
                    close
                    message={'This is a notification with close button.'} action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit">
                        <Close />
                    </IconButton>
                ]}/>
                <br />
                <SnackbarContent message={
                        <div>
                            <AddAlert /> This is a notification with close button and icon.
                        </div>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit">
                            <Close />
                        </IconButton>
                    ]}/>
                <br />
                <SnackbarContent
                    close
                    color="info"
                    icon={
                        AddAlert
                    }
                    message={
                        "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
                    }
                />
            </div>
        );
    }
}

export default Notifications;
