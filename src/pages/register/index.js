import React from 'react';
import '../register/register.css';
import branchIcon from "../../assets/img/register/icone-galho.svg";
import heartIcon from "../../assets/img/register/icone-coracao.png";

const Register = () => {
    return (
        <section className="register-container">            
            <div className="register-user">
                
                <img className="icon-register" src={branchIcon} alt="Ícone de galho com folhas."/>   

                <p>Para você que tem interesse em fazer doação
                    ou ser voluntário em alguma causa social.
                </p>

                <button className="btn-register btn-user">Cadastre-se</button>

            </div>

            <div className="register-idea">
                
                <img className="icon-register" src={heartIcon} alt="Ícone de coração."/>

                <p>Para você que quer ajudar em alguma causa social e precisa de doações ou trabalhos voluntários.
                </p>
                
                <button className="btn-register btn-idea">Cadastrar sua ideia</button>
            </div>

        </section>
    )
}

export default Register;