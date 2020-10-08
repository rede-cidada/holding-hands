import React from 'react'

import './login.css'


export default function Login() {
    return(
        <div class='container-login container-flex column-around'>
            <h2 class='titulo-login'>Login</h2>
            <div class='input-container container-flex column-center'>  
                <div class='container-label margin2 container-flex column-start'>
                    <label class='font-label'
                            for="email">E-mail: </label>
                    <input class='input-size'
                            type="email" id="email" name="email" />
                </div>
                <div class='container-label margin2 container-flex column-start'>
                    <label class='font-label'
                            for="senha">Senha: </label>
                    <input class='input-size'
                            type="password" id="senha" name="senha" />
                </div>
                <button class='btn-login margin10 font20' type="submit">Entrar</button>
            </div>
            <a href="#" class='margin10 font20'>Esqueci a Senha</a>
        </div>
    )
}