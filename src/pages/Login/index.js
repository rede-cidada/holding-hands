import React from "react"
import "./login.css"
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from "react-router-dom";

import Sucess from '../../assets/img/Login/sim.svg';

const Login= () => {

    const { register, errors } = useForm();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [sucesso, setSucesso] = useState(false);

    let storage = []; 

    const emailChange = (e) => {

        setEmail(e.target.value)
    }

    const senhaChange = (e) => {

        setSenha(e.target.value)
    }

    const cadastrar = (event) => {
        event.preventDefault();

        storage.push({ email: email, senha: senha });             
        setSucesso(true)        

    } 

    return(
        <div class='container-login'>
            <h2 class='title-cadastro'>Login</h2>

            <form class='form-container'>  
                <div class='container-input'>
                    <label class='cadastro-label' for="email">
                        E-mail
                    </label>
                    <input class='input-cadastro' type="email" id="email" name="email" onChange={emailChange} ref={register({
                    required: "Digite seu e-mail",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Digite um endereço de e-mail válido", 
                    },
                    })}/>

                    {errors.email && <p className="error">{errors.email.message}</p>}
            
                </div>

                <div class='container-input'>
                    <label class='cadastro-label' for="senha">
                        Senha
                    </label>
                    <input class='input-cadastro' type="password" id="senha" name="senha"  onChange={senhaChange} 
                    placeholder="Senha"
                    ref={register({
                        minLength: 8,
                        maxLength: 10,
                        required: "Digite sua senha",
                        pattern: {
                            message: "Digite uma senha válida",
                        },
                    })}/>

                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>
                
                <div class='form-btn-container'>
                    <button class='btn-cadastro' type="submit">
                        <div className="btn-content" onClick={cadastrar} type="submit">
                            Entrar
                        </div>
                    </button>
                </div>               
            </form>

            <div className={`container-sucesso ${sucesso ? 'true-sucesso' : ''}`}>
                <div className="container-modal">
                    <div className="modal-header">
                        <img src={Sucess}/><h4 className="title-sucesso">Sucesso</h4>
                    </div>
                    <div className="descricao-sucesso-all">
                        <p className="descricao-sucesso">Chegou a hora de transformar o mundo!</p>
                    </div>
                    
                        <Link to='/' className="return-btn">Home</Link>

                </div>
            </div>
        </div>
    )
}

export default Login;