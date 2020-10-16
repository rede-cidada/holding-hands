import React from  "react";
import Logo from "../../assets/img/landing/Icon-Hoding-hands.svg";
import { Link } from "react-router-dom";

import "./header.css";
import { useState } from "react";

const Header = () => {

    const [open, setOpen] = useState(false);

    return(

        <header class="header">
            <div className='header-content'>

                <Link to="/">
                    <div className="logo-header">
                        <img className="logo-header-img" src={Logo} alt="Logo da Holding Hands"/>

                    </div>
                </Link>

                <button className="button-hamburguer" onClick={() => setOpen(!open)} >
                    <div className={`menu-btn ${open ? 'one-open' : 'line-close'}`} />

                    <div className={`menu-btn ${open ? 'two-open' : 'two-close'}`} />

                    <div className={`menu-btn ${open ? 'three-open' : 'line-close'}`} />
                </button>

                <ul className={`nav ${open ? 'nav-show' : ''}`}>
                    <li class="nav-itens">
                        <Link className="link-nav-itens" to="/">HOME</Link>
                    </li>
                    
                    <li class="nav-itens">
                        <Link className="link-nav-itens" to="/Login">LOGIN</Link>
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