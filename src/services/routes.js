import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from '../pages/landing';
import Register from '../pages/register';
import Ideas from '../pages/ideas';
import Description from '../pages/Project-description';
import Cadastro from '../pages/cadastro'; 
import DonationObject from '../pages/DonationObject';
import Login from '../pages/Login'
import Cadastrarideia from '../pages/registerIdeia'
import Header from '../pages/Header'

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
            <Route path="/cadastrar-ideia" component={Cadastrarideia}/>
            <Route path="/Header" component={Header}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;