import { Link } from 'react-router-dom'

import React from 'react'
import './../pagcss/Index.css'
import './../Geral.css'

import Vitoria from '../imgs/vitoria.jpg'
import Ryan from '../imgs/ryan.jpeg'
import Cris from '../imgs/cris.jpeg'

import Header from '../Components/Header/Header'

function Index() {

    return (
        <>
            <body>
                <Header />
                <main>
                    <section id="objetivo">
                        <div id="texto_obj">
                            <h1>Objetivo</h1>

                            <p>O objetivo deste trabalho é apresentar o desenvolvimento de um carrinho despertador que utiliza sistemas mecânicos e eletrônicos para cumprir sua função de despertar o usuário de forma eficiente e divertida. A ideia é criar um produto inovador, que seja capaz de se movimentar e emitir um som alto o suficiente para despertar o usuário.</p>
                            <p>A correria do dia a dia muitas vezes faz com que as pessoas não durmam o suficiente, o que pode prejudicar sua saúde e produtividade. Despertadores tradicionais nem sempre conseguem despertar o usuário de forma eficaz, muitas vezes sendo facilmente ignorados ou desligados sem que o usuário acorde. O carrinho despertador surge como uma alternativa divertida e eficiente para acordar o usuário de forma mais eficaz.</p>
                        </div>
                    </section>

                    <section id="integrante">
                        <div className='titulo-integrante'>
                            <h1>INTEGRANTES</h1>
                        </div>

                        <div className='todos'>
                            <div className="quadrados">
                                
                                    <img src={Ryan} alt="Ft aleatoria" />
                               
                                <h2>Ryan Lima</h2>
                                <p>Web designer e designer gráfico</p>
                            </div>
                            <div className="quadrados">
                                
                                    <img src={Cris} alt="Ft aleatoria" />
                                
                                <h2>Cristofer Authimio</h2>
                                <p>Web designer</p>
                            </div>
                            <div className="quadrados">
                                    <img src={Vitoria} alt="Foto Vitória" />  
                                <h2>Vitória Jeniffer</h2>
                                <p>Web designer e designer gráfico</p>
                            </div>
                        </div>

                    </section>

                </main>
            </body>
        </>
    )
}

export default Index

// Página HOME