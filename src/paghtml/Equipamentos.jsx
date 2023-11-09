import { Link } from 'react-router-dom'

import React from 'react'
import './../pagcss/Equipamentos.css'
import './../Geral.css'

import Header from '../Components/Header/Header'

// import Arduino from '../imgs/arduino.jpeg'
// import Bateria from '../imgs/bateria.jpeg'
// import Chassi from '../imgs/chasi.jpg'
// import Ponte from '../imgs/ponte.jpg'
// import sensor_ult from '../imgs/sensor_ult.jpg'
// import Jumper from '../imgs/jumper.jpg'

function Equipamentos() {
  return (
    <>
    <body>
    <Header />
      <main>
        <section>
          <h1>EQUIPAMENTOS</h1>
          <h2>Os equipamentos necessários para a implementação do carrinho despertador incluem:</h2>

          

          
        </section>
        <section className="componentes">
          <div className='componente'>
            <div className='campo-direitatxt'>
              <h3>1 Carrinho Arduino 2WD em MDF;</h3>
              <a href="https://www.eletrogate.com/kit-chassi-2wd-robo-para-arduino?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gad=1&gclid=EAIaIQobChMIo8_SsriCggMVKSKtBh2EtAqtEAQYAyABEgL1yfD_BwE">Link do Carrinho</a>
            </div>
            <img src="https://cdn.awsli.com.br/600x700/468/468162/produto/19414285/kit-chassi-2wd-robo-para-arduino-19ccfb86.jpg" alt="" />
            </div>

            <div className="componente">
              <div className='campo-esquerdatxt'>
              <h3>Jumper</h3>
              <a href="https://www.amazon.com.br/Cabinho-Jumper-Macho-Unidades-Protoboard/dp/B09QCJ9P79/ref=asc_df_B09QCJ9P79/?tag=googleshopp00-20&linkCode=df0&hvadid=379738801152&hvpos=&hvnetw=g&hvrand=15230810437284852716&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-1659572705882&psc=1">Link do Jumper</a>
              </div>
              <img src="https://m.media-amazon.com/images/I/71eEuTHvUrL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="" />
            </div>

            <div className="componente">
              <div className='campo-esquerdatxt'>
                <h3>Sensor Ultrassônico</h3>
                <a href="https://www.amazon.com.br/Modulo-Distancia-Ultrass%C3%B3nico-Chipsce-Hc-Sr04/dp/B08L7RLY5T/ref=asc_df_B08L7RLY5T/?tag=googleshopp00-20&linkCode=df0&hvadid=379728501964&hvpos=&hvnetw=g&hvrand=16092222945150690917&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-1456012384466&psc=1">Link do Sensor Ultrassônico</a>
              </div>
                <img src="https://m.media-amazon.com/images/I/61mGFBs3+wL._AC_SX679_.jpg" alt="" />
            </div>

            <div className="componente">
              <div className='campo-esquerdatxt'>
                <h3>1 Arduino</h3>
                <a href="https://www.amazon.com.br/Placa-Arduino-Atmega328p-compat%C3%ADvel-Cabo/dp/B0BT26LRXZ/ref=asc_df_B0BT26LRXZ/?tag=googleshopp00-20&linkCode=df0&hvadid=647506789851&hvpos=&hvnetw=g&hvrand=8661021956005160969&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-2016211673984&psc=1">Link do Arduino</a>
              </div>
                <img src="https://m.media-amazon.com/images/I/51ziLRQlkUL._SY445_SX342_QL70_ML2_.jpg" alt="" />
            </div>

            <div className="componente">
              <div className='campo-esquerdatxt'>
                <h3>1 Ponte H</h3>
                <a href="https://www.amazon.com.br/M%C3%B3dulo-Driver-Ponte-L298N-Arduino/dp/B09VWMN16W/ref=asc_df_B09VWMN16W/?tag=googleshopp00-20&linkCode=df0&hvadid=379714766595&hvpos=&hvnetw=g&hvrand=15258508096028627975&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-1946781127838&psc=1">Link da Ponte H</a>
              </div>
                <img src="https://m.media-amazon.com/images/I/612JvILHdCL._AC_SX679_.jpg" alt="" />
            </div>

            <div className="componente">
              <div className='campo-esquerdatxt'>
                <h3>LCD</h3>
                <a href="https://www.eletrogate.com/display-lcd-16x2-i2c-backlight-azul">Link LCD</a>
              </div>
                <img src="https://cdn.awsli.com.br/600x700/468/468162/produto/19414150/display-lcd-16x2-i2c-backlight-azul-7ff37942.jpg" alt="" />  
              
            </div>

            <div className="componente">
              <div className='campo-esquerdatxt'>
                <h3>Buzzer</h3>
                <a href="https://www.arducore.com.br/buzzer-5v">Link Buzzer</a>
              </div>
                <img src="https://cdn.awsli.com.br/600x700/2599/2599375/produto/21647353650e4125865.jpg" alt="" />  
              
            </div>

            <div className="componente">
              <div className='campo-esquerdatxt'>
                <h3>Protoboard</h3>
                <a href="https://www.eletrogate.com/protoboard-400-pontos">Link Protoboard</a>
              </div>
                <img src="https://cdn.awsli.com.br/600x700/468/468162/produto/19414386ea97456c0c.jpg" alt="" />  
              
            </div>

            <div className="componente">
              <div className='campo-esquerdatxt'>
                <h3>Botão</h3>
                <a href="https://www.lojamekanus.com.br/MLB-943825043-kit-10-x-boto-chave-microswitch-push-button-4-pinos-arduino-_JM">Link Botão</a>
              </div>
                <img src="https://http2.mlstatic.com/D_NQ_NP_821413-MLB46387758284_062021-O.webp" alt="" />  
              
            </div>
        </section>


       
      </main>
    </body>
    
    </>
  )
}

export default Equipamentos