import React from 'react';
import {
    Card, CardHeader, CardContent, Grid, Hidden
} from 'material-ui';

class Icons extends React.Component{
    render(){
        return (
            <Grid container>
                <Grid item md={12}>
                    <Card>
                        <CardHeader
                            title={"Material Design Icons"}
                            subheader={
                                <p>
                                    Handcrafted by our friends from <a target="_blank" rel="noopener noreferrer" href="https://design.google.com/icons/">Google</a>
                                </p>
                            }/>
                        <CardContent>
                            <Hidden only={['sm','xs']}>
                                <iframe src="https://design.google.com/icons/" title="Icons iframe">
                                    <p>Your browser does not support iframes.</p>
                                </iframe>
                            </Hidden>
                            <Hidden only={['lg','md']}>
                                <Grid item md={6}>
                                    <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the
                                        <a href="https://design.google.com/icons/" target="_blank" rel="noopener noreferrer">Material Icons</a>
                                    </h5>
                                </Grid>
                            </Hidden>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default Icons;
