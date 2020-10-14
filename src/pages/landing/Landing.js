import React from 'react';

import './landing.css';

import { Link } from 'react-router-dom';

import Logo from '../../assets/img/landing/Icon-Hoding-hands.svg';
import LandingBackground from '../../assets/img/landing/landing-background.svg';
import Heart from '../../assets/img/landing/heart.svg';
import Lamp from '../../assets/img/landing/lamp.svg';
import User from '../../assets/img/landing/user.svg';

const Landing = () => {
    return(
        <div className="landing-all">
            <header>
                <nav className="nav-bar">
                    <li className="nav-bar-itens item-user"><Link to="/login"><img src={User} alt=""/></Link></li>
                </nav>
            </header>

            <div className="landing-container">
                <div>
                <h1 className="logo-container"><img src={Logo} alt=""/>Holding Hands</h1>
                </div>
                

                <p>msadhsad sad asjdkhsakl  asjkdh faskjd asd jahsdkjsahdaksjdhsakj as 
                das sad sad sadasd asl.jh a as s asf adfsda s  s shjkhdasjkhd asjk</p>
                <img className="landing-background" src={LandingBackground} alt=""/>

                <div className="btn-container-landing">
                        <Link className="btn-help" to="/lista-de-ideias"><img src={Heart} alt=""/> Quero ajudar</Link>
                    
                        <Link className="btn-idea" to="/cadastros"><img src={Lamp} alt=""/> Divulgar ideia</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;