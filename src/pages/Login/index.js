import React from 'react'

import './login.css'


export default function Login() {
    return(
        <div class='container-cadastro'>
            <h2 class='title-cadastro'>Cadastro</h2>

            <div class='form-container'>  

                <div class='container-input'>
                    <label class='cadastro-label' for="email">E-mail</label>
                    <input class='input-cadastro' type="email" id="email" name="email"/>
                </div>

                <div class='container-input'>
                    <label class='cadastro-label' for="senha">Senha</label>
                    <input class='input-cadastro' type="password" id="senha" name="senha"/>
                </div>

                <div>
                    <div className="container-check">
                        <input className="check-form" type="checkbox"/><label className="label-check">Manter conectado</label>
                    </div>
                </div>
                
            </div>

            <div class='form-btn-container'>
                <button class='btn-cadastro' type="submit">
                    <div className="btn-content">Casdastre-se</div>
                </button>
            </div>

        </div>
    )
}