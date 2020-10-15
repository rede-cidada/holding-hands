import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import "./cadastros.css";

import branchIcon from "../../assets/img/register/icone-galho.svg";
import heartIcon from "../../assets/img/register/icone-coracao.png";

const Cadastros = () => {
    return (
        <section className="register-container">  
            <Header/>
            <div className="register-user">               
                <img className="icon-register" src={branchIcon} alt="Ícone de galho com folhas."/>   
                
                <p>
                    Para você que tem interesse em fazer doação
                    ou ser voluntário em alguma causa social.
                </p>
                
                <Link to="/cadastro-de-usuario" className="btn-register btn-user">Cadastre-se</Link>
            </div>

            <div className="register-idea">                
                <img className="icon-register" src={heartIcon} alt="Ícone de coração."/>
                
                <p>
                    Para você que quer ajudar mais alguma causa social
                    que precisa de doações ou trabalhos voluntários.</p>

                <Link to="/login" className="btn-register btn-idea">Faça Login</Link>
            </div>
            <Footer/>
        </section>
    )
}

export default Cadastros;