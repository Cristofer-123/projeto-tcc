import { Link } from 'react-router-dom'

import React from 'react'
import './../pagcss/Funcionamento.css'
import './../Geral.css'

import Header from '../Components/Header/Header'


import carrinho1 from '../imgs/carrinhoum.jpeg'
import carrinho2 from '../imgs/carrinhods.jpeg'
import carrinho3 from '../imgs/carrinhotr.jpeg'

import Video from '../imgs/video_carrinho.mp4'

function Funcionamento() {
  return (
    <>
    <body>
    <Header />

      <main>
        <section className='texto'>
          <h1 id='titulo'>FUNCIONAMENTO</h1>

          <div>
            <p>O carrinho despertador é projetado para funcionar de maneira simples e eficiente. Ele consiste em um dispositivo eletrônico equipado com um alarme sonoro e rodas motorizadas que permitem a sua movimentação pelo ambiente.</p>

            <p>O funcionamento básico do carrinho despertador é o seguinte:</p>
          </div>

          <div className='lista'>
            <ol>
              <div className="parte1">
                <li>Configuração do alarme: O usuário pode definir a hora desejada para o despertar e configurar o alarme no carrinho despertador. Isso pode ser feito por meio de um painel de controle, botões ou até mesmo por um aplicativo conectado ao dispositivo.</li>
                <li>Início do alarme: Quando chega o horário programado, o carrinho despertador dispara o alarme sonoro. O som pode ser ajustado de acordo com as preferências do usuário.</li>
                <li>Movimentação do carrinho: Assim que o alarme começa a tocar, o carrinho despertador entra em ação. Suas rodas motorizadas permitem que ele se mova pelo ambiente de forma autônoma. O carrinho pode ser programado para seguir uma trajetória aleatória ou percorrer um caminho pré-determinado.</li>
              </div>
              <div className="parte2">
                <li>Desativação do alarme: Para desligar o alarme, o usuário precisa interagir com o carrinho despertador. Isso pode ser feito de diferentes maneiras, como pressionar um botão no dispositivo ou capturá-lo manualmente. Ao desativar o alarme, o carrinho para de se mover.</li>
                <li>Início do alarme: Quando chega o horário programado, o carrinho despertador dispara o alarme sonoro. O som pode ser ajustado de acordo com as preferências do usuário.</li>
                <li>Movimentação do carrinho: Assim que o alarme começa a tocar, o carrinho despertador entra em ação. Suas rodas motorizadas permitem que ele se mova pelo ambiente de forma autônoma. O carrinho pode ser programado para seguir uma trajetória aleatória ou percorrer um caminho pré-determinado</li>
              </div>
            </ol>
          </div>

          <div className='imgs'>
            <img src={carrinho1} alt="Imagem carrinho" />
            <img src={carrinho2} alt="Imagem carrinho"  />
            <img src={carrinho3} alt="Imagem carrinho" />
          </div>  

          <div className="video">
            <iframe src={Video} frameborder="0" allowFullScreen></iframe>
          </div>
    
        </section>
      </main>
    </body>
    
    </>
  )
}

export default Funcionamento