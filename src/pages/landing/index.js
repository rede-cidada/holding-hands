import React from 'react';

import '../landing/landing.css'

import Logo from '../../assets/image/Icon-Hoding-hands.svg'
import LandingBackground from '../../assets/image/landing-background.svg'
import Heart from '../../assets/image/heart.svg' 
import Lamp from '../../assets/image/lamp.svg'
import User from '../../assets/image/user.svg'


function Landing() {
    return(
        <div>
            <header>
                <nav className="nav-bar">
                    <li className="nav-bar-itens item-user"><a href=""><img src={User} alt=""/></a></li>
                </nav>
            </header>

            <div className="landing-container">
                <div>
                <h1 className="logo-container"><img src={Logo} alt=""/>Holding Hands</h1>
                </div>
                

                <p>msadhsad sad asjdkhsakl  asjkdh faskjd asd jahsdkjsahdaksjdhsakj as 
                das sad sad sadasd asl.jh a as s asf adfsda s  s shjkhdasjkhd asjk</p>
                <img className="landing-background" src={LandingBackground} alt=""/>

                <div className="btn-container">
                        <a className="btn-help" href=""><img src={Heart} alt=""/> Quero ajudar</a>
                    
                        <a className="btn-idea" href=""><img src={Lamp} alt=""/> Divulgar ideia</a>
                </div>
            </div>

        </div>
    )
}

export default Landing;