import { Routes, Route } from 'react-router-dom'

import Diferencial from './../paghtml/Diferencial'
import Index from './../paghtml/Index'
import Funcionamento from '../paghtml/Funcionamento'
import Equipamentos from '../paghtml/Equipamentos'
import PB from '../paghtml/PB'

function Rotas() {
  return (
    <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/diferencial' element={<Diferencial />}/>   
        <Route path='/funcionamento' element={<Funcionamento />}/>
        <Route path='/equipamentos' element={<Equipamentos />}/>
        <Route path='/publico-alvo' element={<PB />}/>   
    </Routes>
  )
}

export default Rotas