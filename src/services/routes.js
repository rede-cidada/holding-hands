import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Cadastros from '../pages/Cadastros';
import Ideias from '../pages/Ideias';
import DescricaoIdeia from '../pages/DescricaoIdeia';
import CadastroUsuario from '../pages/CadastroUsuario';
import DoacaoObjetos from '../pages/DoacaoObjetos';
import Login from '../pages/Login';
import CadastroIdeia from '../pages/CadastroIdeia';
import DoacaoDinheiro from '../pages/DoacaoDinheiro';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/cadastros" component={Cadastros} />
      <Route path="/lista-de-ideias" component={Ideias} />
      <Route path="/ideia" component={DescricaoIdeia} />
      <Route path="/cadastro-de-usuario" component={CadastroUsuario} />
      <Route path="/doacao-de-objetos" component={DoacaoObjetos} />
      <Route path="/login" component={Login} />
      <Route path="/cadastrar-ideia" component={CadastroIdeia} />
      <Route path="/doacao-de-dinheiro" component={DoacaoDinheiro} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
