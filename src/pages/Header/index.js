import React from  "react";
import Logo from "../../assets/img/landing/Icon-Hoding-hands.svg";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
    return(
        <header class="header">
            <div className='header-content'>

                <Link to="/">
                    <div className="logo-header">
                        <img className="logo-header-img" src={Logo} alt="Logo da Holding Hands"/>

                        <p className="logo-header-title">
                            Holding Hands
                        </p>
                    </div>
                </Link>

                <ul className="nav">
                    <li class="nav-itens">
                        <Link className="link-nav-itens" to="/">HOME</Link>
                    </li>
                    
                    <li class="nav-itens">
                        <Link className="link-nav-itens" to="/login">LOGIN</Link>
                    </li>
                    <li class="nav-itens">                        
                        <Link className="link-nav-itens" to="/cadastro-de-usuario">CADASTRAR-SE</Link>                        
                    </li>                    
                    <li class="nav-itens">                        
                        <Link className="link-nav-itens" to="/cadastrar-ideia">CADASTRAR IDEIA</Link>                        
                    </li>
                </ul>                
            </div>
        </header>
    )
}

export default Header;