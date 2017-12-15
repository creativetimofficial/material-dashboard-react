import React from 'react';
import {
    Card, CardContent, CardHeader, CardActions, Grid, Typography, Divider
} from 'material-ui';
import {
    ContentCopy, Store, InfoOutline, Tv
} from 'material-ui-icons';

class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <Grid container>
                    <Grid item sm={6} lg={3}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <ContentCopy />
                                }
                            />
                            <CardContent>
                                <Typography type="subtitle">
                                    Used Space
                                </Typography>
                                <Typography type="headline" component="h2">
                                    49/50 GB
                                </Typography>
                            </CardContent>
                            <Divider />
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={6} lg={3}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Store />
                                }
                            />
                            <CardContent>
                                <Typography type="subtitle">
                                    Revenue
                                </Typography>
                                <Typography type="headline" component="h2">
                                    $34,245
                                </Typography>
                            </CardContent>
                            <Divider />
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={6} lg={3}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <InfoOutline />
                                }
                            />
                            <CardContent>
                                <Typography type="subtitle">
                                    Fixed Issues
                                </Typography>
                                <Typography type="headline" component="h2">
                                    75
                                </Typography>
                            </CardContent>
                            <Divider />
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={6} lg={3}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Tv />
                                }
                            />
                            <CardContent>
                                <Typography type="subtitle">
                                    Followers
                                </Typography>
                                <Typography type="headline" component="h2">
                                    +245
                                </Typography>
                            </CardContent>
                            <Divider />
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
