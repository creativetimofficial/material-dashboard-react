import React from 'react';
import {
    Card, CardHeader, CardContent, Grid, Snackbar, SnackbarContent, IconButton, Typography, Button
} from 'material-ui';
import {
    Close, AddAlert
} from 'material-ui-icons';

class Notifications extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notifications: []
        };
    }
    showNotification(place){
        var nots = [];
        this.state.notifications !== null ? (nots = this.state.notifications):null;
        nots.push(
            <SnackbarContent key={nots.length+1} message="I love candy. I love cookies. I love cupcakes." />
        );
        this.setState({notifications: nots});
        console.log(this.state);
    }
    render(){
        return (
            <Card>
                <CardHeader
                    title={"Notifications"}
                    subheader={
                        <p className="category">Handcrafted by <a target="_blank" href="https://www.creative-tim.com/">Creative Tim</a>. Please checkout the <a href="#pablo" target="_blank">full documentation.</a>
                        </p>
                    } />
                <CardContent>
                    <Grid container justify="center">
                        <Grid item md={6}>
                            <Typography type="subheading" align={'center'}>
                                Notifications Places
                                <Typography type="body1">
                                    Click to view notifications
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid item lg={8} md={10}>
                            <Grid container>
                                <Grid item md={4}>
                                    <Button raised color="primary" onClick={() => this.showNotification('tl')}>Top Left</Button>
                                    {/* {
                                        this.state.notifications !== null ? (
                                            <Snackbar
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                                open={true}
                                            >
                                                {
                                                    this.state.notifications.map((prop,key) => {
                                                        return prop;
                                                    })
                                                }
                                            </Snackbar>
                                        ):null
                                    } */}
                                    {
                                        this.state.notifications.map((prop,key) => {
                                            return prop;
                                        })
                                    }
                                    {/*
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
                                     */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default Notifications;
