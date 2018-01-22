import React from 'react';
import {
    Grid
} from 'material-ui';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';


import DocHeader from './DocHeader/DocHeader';
import DocSidebar from './DocSidebar/DocSidebar';

import docRoutes from 'routes/documentation.jsx';

class Documentation extends React.Component{
    render(){
        return (
            <div>
                <DocHeader />
                <Grid container style={{marginTop: "75px"}}>
                    <Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
                        <DocSidebar routes={docRoutes} {...this.props}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={10} xl={10}>
                        <Switch>
                            {
                                docRoutes.map((prop,key) => {
                                    if(prop.redirect)
                                        return (
                                            <Redirect from={prop.path} to={prop.to} key={key}/>
                                        );
                                    return (
                                        <Route path={prop.path} component={prop.component} key={key}/>
                                    );
                                })
                            }
                        </Switch>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Documentation;
