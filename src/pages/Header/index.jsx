import React from 'react'
import Logo from '../../assets/img/landing/logo-Hoding-Hands.svg'

import './header.css'

export default function Header() {
    return(
        <header class='header'>   
            <div className='header-content'>
                <a href='https://www.google.com/'>
                    <img 
                    src={Logo} 
                    alt="Logo holdin hands" 
                    class='logo-header'/>
                </a>

                <ul className='menu'>
                    <li class='item-menu'>
                        <a className='link-item-menu' href="https://www.google.com/">HOME</a>
                    </li>
                    <li class='item-menu'>
                        <a className='link-item-menu' href="https://www.google.com/">LOGIN</a>
                    </li>
                    <li class='item-menu'>
                        <a className='link-item-menu' href="https://www.google.com/">CADASTRO</a>
                    </li>
                </ul>                
            </div>     
            <div className='transbox'></div>    
        </header>
    )
}