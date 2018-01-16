import React from 'react';
import {
    Grid, Snackbar, SnackbarContent, IconButton
} from 'material-ui';
import {
    Close, AddAlert
} from 'material-ui-icons';

import {
    RegularCard, A, P, H5, Small, Button
} from 'components';

class Notifications extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tl: false,
            tc: false,
            tr: false,
            bl: false,
            bc: false,
            br: false
        };
    }
    showNotification(place){
        var x = [];
        x[place] = true;
        this.setState(x);
        setTimeout(function(){
            x[place] = false;
            this.setState(x);
        }.bind(this),6000);
    }
    render(){
        return (
            <RegularCard
                cardTitle="Notifications"
                cardSubtitle={
                    <P>
                        Handcrafted by our friends from <A target="_blank" href="https://material-ui-next.com/">Material UI</A> and styled by <A target="_blank"  href="https://www.creative-tim.com/">Creative Tim</A>. Please checkout the <A href="#pablo" target="_blank">full documentation</A>.
                    </P>
                }
                content={
                    <div>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <H5>Notifications Style</H5>
                                <br />
                                <SnackbarContent message={'This is a plain notification'} />
                                <br />
                                <SnackbarContent message={'This is a notification with close button.'} action={[
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
                                <SnackbarContent message={
                                        <div>
                                            <AddAlert /> This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
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
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <H5>Notifications States</H5>
                                <br />
                                <SnackbarContent message={'INFO - This is a regular notification made with ".alert-info"'} action={[
                                    <IconButton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit">
                                        <Close />
                                    </IconButton>
                                ]}/>
                                <br />
                                <SnackbarContent message={'SUCCESS - This is a regular notification made with ".alert-success"'} action={[
                                    <IconButton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit">
                                        <Close />
                                    </IconButton>
                                ]}/>
                                <br />
                                <SnackbarContent message={'WARNING - This is a regular notification made with ".alert-warning"'} action={[
                                    <IconButton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit">
                                        <Close />
                                    </IconButton>
                                ]}/>
                                <br />
                                <SnackbarContent message={'DANGER - This is a regular notification made with ".alert-danger"'} action={[
                                    <IconButton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit">
                                        <Close />
                                    </IconButton>
                                ]}/>
                                <br />
                                <SnackbarContent message={'PRIMARY - This is a regular notification made with ".alert-primary"'} action={[
                                    <IconButton
                                        key="close"
                                        aria-label="Close"
                                        color="inherit">
                                        <Close />
                                    </IconButton>
                                ]}/>
                                <br />
                            </Grid>
                        </Grid>
                        <br />
                        <br />
                        <Grid container justify="center">
                            <Grid item xs={12} sm={12} md={6} style={{textAlign:"center"}}>
                                <H5>
                                    Notifications Places
                                    <Small>
                                        Click to view notifications
                                    </Small>
                                </H5>
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <Grid item xs={12} sm={12} md={10} lg={8}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Button raised color="primary" onClick={() => this.showNotification('tl')}>Top Left</Button>
                                        <Snackbar
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={this.state.tl}
                                            SnackbarContentProps={{
                                                'aria-describedby': 'message-id',
                                            }}
                                            message={<span id="message-id">Note archived</span>}
                                            action={[
                                                <IconButton
                                                key="close"
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={() => { this.setState({tl: false})}}
                                                >
                                                    <Close />
                                                </IconButton>
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Button raised color="primary" onClick={() => this.showNotification('tc')}>Top Center</Button>
                                        <Snackbar
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                            open={this.state.tc}
                                            SnackbarContentProps={{
                                                'aria-describedby': 'message-id',
                                            }}
                                            message={<span id="message-id">Note archived</span>}
                                            action={[
                                                <IconButton
                                                key="close"
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={() => { this.setState({tc: false})}}
                                                >
                                                    <Close />
                                                </IconButton>
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Button raised color="primary" onClick={() => this.showNotification('tr')}>Top Right</Button>
                                        <Snackbar
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={this.state.tr}
                                            SnackbarContentProps={{
                                                'aria-describedby': 'message-id',
                                            }}
                                            message={<span id="message-id">Note archived</span>}
                                            action={[
                                                <IconButton
                                                key="close"
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={() => { this.setState({tr: false})}}
                                                >
                                                    <Close />
                                                </IconButton>
                                            ]}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justify={'center'}>
                            <Grid item xs={12} sm={12} md={10} lg={8}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Button raised color="primary" onClick={() => this.showNotification('bl')}>Bottom Left</Button>
                                        <Snackbar
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            open={this.state.bl}
                                            SnackbarContentProps={{
                                                'aria-describedby': 'message-id',
                                            }}
                                            message={<span id="message-id">Note archived</span>}
                                            action={[
                                                <IconButton
                                                key="close"
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={() => { this.setState({bl: false})}}
                                                >
                                                    <Close />
                                                </IconButton>
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Button raised color="primary" onClick={() => this.showNotification('bc')}>Bottom Center</Button>
                                        <Snackbar
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            open={this.state.bc}
                                            SnackbarContentProps={{
                                                'aria-describedby': 'message-id',
                                            }}
                                            message={<span id="message-id">Note archived</span>}
                                            action={[
                                                <IconButton
                                                key="close"
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={() => { this.setState({bc: false})}}
                                                >
                                                    <Close />
                                                </IconButton>
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Button raised color="primary" onClick={() => this.showNotification('br')}>Bottom Right</Button>
                                        <Snackbar
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            open={this.state.br}
                                            SnackbarContentProps={{
                                                'aria-describedby': 'message-id',
                                            }}
                                            message={<span id="message-id">Note archived</span>}
                                            action={[
                                                <IconButton
                                                key="close"
                                                aria-label="Close"
                                                color="inherit"
                                                onClick={() => { this.setState({br: false})}}
                                                >
                                                    <Close />
                                                </IconButton>
                                            ]}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                }
            />
        );
    }
}

export default Notifications;
