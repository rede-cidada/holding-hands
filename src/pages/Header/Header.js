import React from 'react'
import Logo from '../../assets/img/landing/logo-Hoding-Hands.svg'
import { Link } from 'react-router-dom';

import './header.css'

export default function Header() {
    return(
        <header class='header'>   
            <div className='header-content'>
                <Link to="/">
                    <img 
                    src={Logo} 
                    alt="Logo holdin hands" 
                    class='logo-header'/>
                </Link>

                <ul className='menu'>
                    <li class='item-menu'>
                        <Link className='link-item-menu'
                                to="/register">HOME</Link>
                    </li>
                    <li class='item-menu'>
                        <Link className='link-item-menu'
                                to="/Login">LOGIN</Link>
                    </li>
                    <li class='item-menu'>                        
                        <Link className='link-item-menu'
                                to="/cadastro">CADASTRAR-SE</Link>                        
                    </li>                    
                    <li class='item-menu'>                        
                        <Link className='link-item-menu'
                                to="/cadastrar-ideia">CADASTRAR IDEIA</Link>                        
                    </li>
                </ul>                
            </div>     
            <div className='transbox'></div>    
        </header>
    )
}