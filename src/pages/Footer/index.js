import React from "react";
import "./Footer.css";

import Logo from "../../assets/img/landing/Icon-Hoding-hands.svg";

const Footer = () => {
    return(
    <footer className="footer-conatiner-all">
        <div className="footer-conatiner">
            <div className="logo-footer">
                <img className="logo-footer-img" src={Logo} alt="Logo da Holding Hands"/>

                <p className="logo-footer-title">
                    Holding Hands
                </p>
            </div>

            <div className="footer-devs-all">
                <div className="footer-devs">
                    <li>
                        <a className="footer-devs-itens" href="https://github.com/Anagisely">
                        Ana Gisely
                        </a>
                    </li>

                    <li>
                        <a className="footer-devs-itens" href="https://github.com/aryane-cristine">
                        Aryane Cristina
                        </a>
                    </li>
                </div>

                <div className="footer-devs">
                    <li>
                        <a className="footer-devs-itens" href="https://github.com/maluhcosta">
                        Maria Luísa
                        </a>
                    </li>

                    <li>
                        <a className="footer-devs-itens" href="https://github.com/TiagoAugustoFront">
                        Tiago Augusto
                        </a>
                    </li>
                </div>
            </div>
            
            <p className="copy">
                &copy; Holding Hands 2020
            </p>
        </div>
    </footer>
    )    
}

export default Footer;