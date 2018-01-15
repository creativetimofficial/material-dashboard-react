import React from 'react';
import {
    Grid, Card, CardHeader, CardContent, InputLabel,
} from 'material-ui';

import ProfileCard from 'components/Cards/ProfileCard';
import RegularCard from 'components/Cards/RegularCard';
import Button from 'components/CustomButtons/Button';
import CustomInput from 'components/CustomInput/CustomInput';

class UserProfile extends React.Component{
    render(){
        return (
            <div>
                <Grid container>
                    <Grid item md={8}>
                        <RegularCard
                            cardTitle="Edit Profile"
                            cardSubtitle="Complete your profile"
                            content={
                                <div>
                                    <Grid container>
                                        <Grid item md={5}>
                                            <CustomInput
                                                labelText="Company (disabled)"
                                                id="company-disabled"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    disabled: true
                                                }}
                                            />
                                        </Grid>
                                        <Grid item md={3}>
                                            <CustomInput
                                                labelText="Username"
                                                id="username"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <CustomInput
                                                labelText="Email address"
                                                id="email-address"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item md={6}>
                                            <CustomInput
                                                labelText="First Name"
                                                id="first-name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </Grid>
                                        <Grid item md={6}>
                                            <CustomInput
                                                labelText="Last Name"
                                                id="last-name"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item md={4}>
                                            <CustomInput
                                                labelText="City"
                                                id="city"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <CustomInput
                                                labelText="Country"
                                                id="country"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </Grid>
                                        <Grid item md={4}>
                                            <CustomInput
                                                labelText="Postal Code"
                                                id="postal-code"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item md={12}>
                                            <InputLabel style={{color: '#AAAAAA'}}>About me</InputLabel>
                                            <CustomInput
                                                labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                                                id="about-me"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    multiline: true,
                                                    rows: 5
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            }
                            footer={
                                <Button color="primary">Update Profile</Button>
                            }
                        />
                    </Grid>
                    <Grid item md={4}>
                        <ProfileCard
                            subtitle="CEO / CO-FOUNDER"
                            title="Alec Thompson"
                            description="Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                            footer={
                                <Button color="primary" round>Follow</Button>
                            }
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default UserProfile;
