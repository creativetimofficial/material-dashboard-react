import React from 'react';
import {
    Grid, Card, CardHeader, CardContent, Input, FormControl, InputLabel,
} from 'material-ui';

import ProfileCard from 'components/Cards/ProfileCard';

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
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="company-disabled">Company (disabled)</InputLabel>
                                            <Input id="company-disabled" disabled/>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="username">Username</InputLabel>
                                            <Input id="username"/>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={4}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="email-address">Email address</InputLabel>
                                            <Input id="email-address"/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="first-name">First Name</InputLabel>
                                            <Input id="first-name"/>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="last-name">Last Name</InputLabel>
                                            <Input id="last-name"/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="address">Address</InputLabel>
                                            <Input id="address"/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={4}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="city">City</InputLabel>
                                            <Input id="city"/>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={4}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="country">Country</InputLabel>
                                            <Input id="country"/>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={4}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="postal-code">Postal Code</InputLabel>
                                            <Input id="postal-code"/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={12}>
                                        <InputLabel>About me</InputLabel>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="about-me">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</InputLabel>
                                            <Input id="about-me" multiline rows={5}/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <ProfileCard />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default UserProfile;
