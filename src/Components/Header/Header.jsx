import { Link, NavLink } from 'react-router-dom'
import { useState } from "react"
import React from 'react'

import { List, X } from "@phosphor-icons/react"

import './Header.css'
import Logo from '../../imgs/Logos TCC/logo.png'

function Header() {

    const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if (abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

    return (
        <header>

            <div className="menu_mobile">
                <div className="botao_menu">
                    <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={20} /> : <List size={20} />}</button>
                    <div className='imgs_header'>
                        <img src={Logo} alt="" id='img1_header' />

                    </div>
                </div>


                <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                    <nav>
                        <ul className='separar'>
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/diferencial'}>DIFERENCIAL</Link></li>
                            <li><Link to={'/funcionamento'}>FUNCIONAMENTO</Link></li>
                            <li><Link to={'/equipamentos'}>EQUIPAMENTOS</Link></li>
                            <li><Link to={'/publico-alvo'}>PÚBLICO-ALVO</Link></li>
                        </ul>
                    </nav>

                </div>
            </div>

            <div className="menu_desktop">
                <figure>
                    <img src={Logo} alt="Logo da empresa" width="150px" />
                </figure>

                <div id='naveg'>
                    <nav>
                        <ul className='separards'>
                        <li><Link to={'/'}>HOME</Link></li>
                        <li><Link to={'/diferencial'}>DIFERENCIAL</Link></li>
                        <li><Link to={'/funcionamento'}>FUNCIONAMENTO</Link></li>
                        <li><Link to={'/equipamentos'}>EQUIPAMENTOS</Link></li>
                        <li><Link to={'/publico-alvo'}>PÚBLICO-ALVO</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    )
}

export default Header