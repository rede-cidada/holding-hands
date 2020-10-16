import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

import LandingBackground from "../../assets/img/landing/landing-background.svg";
import Heart from "../../assets/img/landing/heart.svg";
import Lamp from "../../assets/img/landing/lamp.svg";

const Landing = () => {
    return(
        <div className="landing-all">
            <div className="landing-container">
                <div>
                    <Link to="/">
                        <h1 className="logo-container">
                            Holding Hands
                        </h1>
                    </Link>
                    <p className="landing-line">Doações e investimentos para causas sociais.</p>
                </div>               

                <img className="landing-background" src={LandingBackground} alt="Imagem de lâmpada com ícones variados ao redor"/>

                <div className="btn-container-landing">
                    <Link className="btn-help" to="/lista-de-ideias">
                        <img src={Heart} alt="Ícone de coração"/>
                        Quero ajudar
                    </Link>
          
                    <Link className="btn-idea" to="/cadastrar-ideia">
                        <img src={Lamp} alt="Ícone de lâmpada"/>
                        Cadastrar ideia
                    </Link>
                </div>               
            </div>
        </div>
    )
}

export default Landing;