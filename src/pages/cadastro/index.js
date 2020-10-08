import React from 'react'

import './cadastro.css'

import Arrow from '../../assets/img/cadastro/seta.svg'
import Google from '../../assets/img/cadastro/google-logo.svg'
import Apple from '../../assets/img/cadastro/apple-logo.svg'



export default function Cadastro() {
    return(
        <div class='container-cadastro container-flex column-around'>
            <h2 class='titulo-cadastro'>Cadastro</h2>
            <div class='input-container container-flex wrap'>  
                <div class='container-label container-flex column-start'>
                    <label class='font-label'
                            for="nome">Nome de usuário: </label>
                    <input class='input-size'
                            type="nome" id="nome" name="nome" />
                </div>
                <div class='container-label container-flex column-start'>
                    <label class='font-label'
                            for="email">E-mail: </label>
                    <input class='input-size'
                            type="email" id="email" name="email" />
                </div>
                <div class='container-label container-flex column-start'>
                    <label class='font-label'
                            for="senha">Senha: </label>
                    <input class='input-size'
                            type="password   " id="senha" name="senha" />
                </div>
                <div class='container-label container-flex column-start'>
                    <label class='font-label'
                            for="phone">Telefone: </label>
                    <input class='input-size'
                            type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>
                
            </div>
            <div class='btn-container container-flex column-around'>
                <button class='btn-cadastro' type="submit">
                    <img src={Arrow} class='icon-buttom'
                            alt="Seta para a direita de Cadastro simples"/> Casdastre-se
                            </button>
                <button class='btn-cadastro' type="submit">
                    <img src={Google} class='icon-buttom' alt="Logo Google plus"/>
                     Fazer login com google</button>
                <button class='btn-cadastro' type="submit">
                    <img src={Apple} class='icon-buttom' alt="Logo da Apple"/>
                     Fazer login com apple</button>
            </div>
            <img src="../../../assets/img/cadastr" alt=""/>
        </div>
    )
}