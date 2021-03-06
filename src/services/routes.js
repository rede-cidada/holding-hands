import React from "react";

import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Ideias from "../pages/Ideias";
import CadastroUsuario from "../pages/CadastroUsuario";
import DoacaoObjetos from "../pages/DoacaoObjetos";
import Login from "../pages/Login";
import CadastroIdeia from "../pages/CadastroIdeia";
import DoacaoDinheiro from "../pages/DoacaoDinheiro";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/lista-de-ideias" component={Ideias} />
    <Route path="/cadastro-de-usuario" component={CadastroUsuario} />
    <Route path="/doacao-de-objetos" component={DoacaoObjetos} />
    <Route path="/login" component={Login} />
    <Route path="/cadastrar-ideia" component={CadastroIdeia} />
    <Route path="/doacao-de-dinheiro" component={DoacaoDinheiro} />
  </Switch>
);

export default Routes;
