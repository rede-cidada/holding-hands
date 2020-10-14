import React from 'react';

import './cadastroUsuario.css';
import Header from '../Header/Header'


export default function Cadastro() {
    return(
        
        <div class='container-cadastro'>
            <Header />
            <h2 class='title-cadastro'>Cadastro</h2>

            <div class='form-container'>  

                <div class='container-input'>
                    <label class='cadastro-label' for="nome">Nome Completo</label>
                    <input class='input-cadastro' type="nome" id="nome" name="nome"/>
                </div>

                <div class='container-input'>
                    <label class='cadastro-label' for="email">E-mail</label>
                    <input class='input-cadastro' type="email" id="email" name="email"/>
                </div>

                <div class='container-input'>
                    <label class='cadastro-label' for="senha">Senha</label>
                    <input class='input-cadastro' type="password" id="senha" name="senha"/>
                </div>

                <div class='container-input'>
                    <label class='cadastro-label' for="phone">Telefone</label>
                    <input class='input-cadastro' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </div>

                <div>
                    <div className="container-check">
                        <input className="check-form" type="checkbox"/><label>Aceito os termos</label>
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