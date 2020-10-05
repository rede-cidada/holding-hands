import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Ideas from '../pages/Ideas'
import description from '../pages/Project-description'
import Cad from '../pages/Cadastro'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route path="/ideia" component={Ideas}/>
            <Route path="/projeto-description" component={description}/>
            <Route path="/cadastro" component={Cad}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;