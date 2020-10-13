import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Ideas from '../pages/Ideas';
import Description from '../pages/Project-description';
import Cadastro from '../pages/Cadastro'; 
import DonationObject from '../pages/DonationObject';
import Login from '../pages/Login'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/register" component={Register}/>
            <Route path="/ideia" component={Ideas}/>
            <Route path="/projeto-description" component={Description}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/Donation-objects" component={DonationObject}/>
            <Route path="/Login" component={Login}/> 
        </Switch>
    </BrowserRouter>
);

export default Routes;