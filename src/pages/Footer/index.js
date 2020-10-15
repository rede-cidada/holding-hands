import React from "react";
import "./Footer.css";

import Logo from "../../assets/img/landing/Icon-Hoding-hands.svg";

const Footer = () => {
    return(
        <footer className="divFooter">
            <div className="divLogo">
                <div className="logo-footer">
                    <img className="holding" src={Logo} alt="Logo da Holding Hands"/>
                </div>
                
                <div className="logo-nome">
                    Holding Hands
                </div>
            </div>
            
            <div className="copy">
                <p> 
                    &copy; Holding Hands 2020, 
                    <a href="https://github.com/Anagisely">
                        Ana Gisely,
                    </a>
                        
                    <a href="https://github.com/aryane-cristine">
                        Aryane Cristina,
                    </a>
                    
                    <a href="https://github.com/maluhcosta">
                         Maria Luísa,
                    </a>
                                
                    <a href="https://github.com/TiagoAugustoFront">
                        Tiago Augusto
                    </a>.
                </p>
            </div>
        </footer>
    )    
}

export default Footer;