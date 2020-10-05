import React from 'react';
import './register.css';
import branchIcon from "../../assets/img/register/icone-galho.svg";
import heartIcon from "../../assets/img/register/icone-coracao.png";

import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="register-container">        
            <div className="register-user">
                
                <img className="icon-register" src={branchIcon} alt="Ícone de galho com folhas."/>   

                <p>Para você que tem interesse em fazer doação
                    ou ser voluntário em alguma causa social.
                </p>

                <Link to="/cadastro" className="btn-register btn-user">Cadastre-se</Link>

            </div>

            <div className="register-idea">
                
                <img className="icon-register" src={heartIcon} alt="Ícone de coração."/>

                <p>Para você que quer ajudar mais alguma causa social
                    que precisa de doações ou trabalhos voluntários.</p>
                
                <button className="btn-register btn-idea">Faça Login</button>
            </div>

        </section>
    )
}

export default Register;