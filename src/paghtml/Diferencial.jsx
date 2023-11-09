import { Link } from 'react-router-dom'

import React from 'react'
import './../pagcss/Diferencial.css'
import './../Geral.css'

import Header from '../Components/Header/Header'

// imgs
import Diferente from './../imgs/diferente.jpg'

// 

function Diferencial() {
  return (
    <>
    <body>
    <Header />
    <main>
        <h1 class="h1">DIFERENCIAL</h1>
        <section class="corpo">

          <div class="imagem">
            <img className='ima' src={Diferente} alt="" />
          </div>

        <div className="textoo">
          <p>O diferencial do TCC em questão é a combinação de duas funcionalidades principais: um alarme sonoro eficiente e a capacidade de movimentação autônoma. A ideia é que, assim que o alarme comece a tocar, o carrinho despertador entre em ação, deslocando-se pelo quarto ou qualquer ambiente onde esteja localizado. Essa movimentação dinâmica requer que a pessoa saia da cama e vá até o carrinho para desativar o alarme, garantindo assim um despertar mais efetivo.

          O carrinho despertador pode ser programado de acordo com as preferências do usuário, permitindo a personalização de aspectos como velocidade e trajetória. Além disso, o dispositivo pode ser equipado com sensores de obstáculos para evitar colisões e garantir um funcionamento seguro. Essa abordagem interativa e lúdica para despertar promove uma maior consciência e envolvimento ativo por parte do usuário, afastando a tentação de voltar a dormir e proporcionando uma transição suave entre o sono e a vigília.</p>
        </div>
      </section>
    </main>
    </body>
    </>
  )
}

export default Diferencial