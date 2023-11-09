import { Link } from 'react-router-dom'

import React from 'react'
import './../pagcss/PB.css'
import './../Geral.css'

import Header from '../Components/Header/Header'

// imgs
import Alvo from "./../imgs/Foca-no-Objetivo.jpg"
// 

function PB() {
  return (
    <>
    <body>
    <Header />
      <main>
        <section className='conteudo'>
          <h1>PÚBLICO-ALVO</h1>
          <div className="container">
            <figure><img src={Alvo} alt="" /></figure>

            <p>O público-alvo desse TCC inclui pessoas de todas as idades que enfrentam dificuldades em despertar de maneira eficaz. Isso pode abranger estudantes, profissionais, pessoas com dificuldades de sono e crianças em idade escolar. O carrinho despertador oferece uma abordagem inovadora e interativa para despertar, ajudando a combater a procrastinação matinal, estimulando a mente e o corpo, e proporcionando uma experiência de despertar mais envolvente e divertida.
           É importante destacar que o carrinho despertador pode ser adaptado para atender às necessidades e preferências individuais de cada público-alvo. Seja para ajudar na disciplina matinal, combater problemas de sono ou adicionar uma dose de diversão à rotina, o carrinho despertador tem o potencial de se tornar uma solução eficaz e atraente para diferentes grupos de pessoas que buscam uma experiência de despertar única e melhorada.</p>

          </div>


          <h1>BIBLIOGRAFIA</h1>
          <div className="lik">
          <a href="https://www.techtudo.com.br/noticias/2011/05/top-10-despertadores-diferentes-para-voce-acordar.ghtml">Ideias de despertadores</a>
          <a href="https://www.figma.com/exit?url=https%3A%2F%2Fvisao.sapo.pt%2Fatualidade%2Fsociedade%2F2016-02-27-despertadores-originais-para-quem-tem-dificuldade-em-acordar%2F">Nosso Figma</a>
          <a href="http://luciliadiniz.com/despertar-na-correria/">Ideia do nosso projeto</a>
          </div>
        </section>
      </main>
    </body>
    
    </>
  )
}

export default PB