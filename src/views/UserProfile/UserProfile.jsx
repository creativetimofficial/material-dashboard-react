import React from 'react';
import {
    Grid, Card, CardHeader, CardContent, Input
} from 'material-ui';

import avatar from 'assets/img/faces/marc.jpg';

class UserProfile extends React.Component{
    render(){
        return (
            <div>
                <Grid container>
                    <Grid item md={8}>
                        <Card>
                            <CardHeader
                                title={"Edit Profile"}
                                subheader={"Complete your profile"}
                            />
                            <CardContent>
                                <Grid container>
                                    <Grid item md={5}>
                                        <Input
                                            value="Company (disabled)"
                                            disabled
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={3}>
                                        <Input
                                            placeholder="Username"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <Input
                                            placeholder="Email address"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={6}>
                                        <Input
                                            placeholder="First Name"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Input
                                            placeholder="Last Name"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Input
                                            placeholder="Address"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={4}>
                                        <Input
                                            placeholder="City"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <Input
                                            placeholder="Country"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={4}>
                                        <Input
                                            placeholder="Postal Code"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Input
                                            placeholder="About me"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <img src={avatar} alt="..."/>
                                }
                                subheader={"CEO / CO-FOUNDER"}
                                title={"Alec Thompson"}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default UserProfile;
