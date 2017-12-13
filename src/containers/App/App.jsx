import React from 'react';
import { createBrowserHistory } from 'history';
import {
    Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Sidebar from 'components/Sidebar/Sidebar.jsx';

import appRoutes from 'routes/app.jsx';

const hist = createBrowserHistory();

class App extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <Sidebar {...this.props} />
                <div className="main-panel">
                    <Header {...this.props} />
                    <Router history={hist}>
                        <Switch>
                            {
                                appRoutes.map((prop,key) => {
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
                    </Router>
                    <Footer {...this.props} />
                </div>
            </div>
        );
    }
}

export default App;
