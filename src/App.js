import React from 'react'; 
//import Landing from './pages/landing';
//import Register from './pages/register';
import RegisterIdeia from './pages/registerIdeia';
import React from 'react';

import Landing from './pages/landing';
import Register from './pages/register';
import ProjectDescription from './pages/Project-description';
import Cadastro from './pages/cadastro';
import Ideas from './pages/ideas';

import './assets/global.css';

function App() {
  return (
    <div>
    <RegisterIdeia/>
    <Landing />
    </div>
  );
}

export default App;