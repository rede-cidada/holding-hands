import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./landing.css";

import Logo from "../../assets/img/landing/Icon-Hoding-hands.svg";
import LandingBackground from "../../assets/img/landing/landing-background.svg";
import Heart from "../../assets/img/landing/heart.svg";
import Lamp from "../../assets/img/landing/lamp.svg";
import User from "../../assets/img/landing/user.svg";

const Landing = () => {
    return(
        <div className="landing-all">
            <header>
                <nav className="nav-bar">
                    <li className="nav-bar-itens item-user">
                        <Link to="/cadastros"><img src={User} alt="Ícone de usuário"/>
                        </Link>
                    </li>
                </nav>
            </header>

            <div className="landing-container">
                <div>
                    <Link to="/">
                        <h1 className="logo-container">
                            <img src={Logo} alt="Logo do Holding Hands: ícone de mãos dadas formando um coração"/>
                            Holding Hands
                        </h1>
                    </Link>
                </div>               
                <p>
                    msadhsad sad asjdkhsakl  asjkdh faskjd asd jahsdkjsahdaksjdhsakj as 
                    das sad sad sadasd asl.jh a as s asf adfsda s  s shjkhdasjkhd asjk
                </p>

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
            <Footer/>
        </div>
    )
}

export default Landing;