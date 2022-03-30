
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CuentaDebito from './components/CuentaDebito'
import CuentaCredito from './components/CuentaCredito'
import CreditoHipotecario from './components/CreditoHipotecario'
import Menu from './components/Menu'

export default function App(){
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/" element={<CuentaDebito/>}/>
          <Route exact path="/Credito" element={<CuentaCredito/>}/>
          <Route exact path="/CreditoHipotecario" element={<CreditoHipotecario/>}/>
        </Routes>  
      </BrowserRouter>
    )
}

