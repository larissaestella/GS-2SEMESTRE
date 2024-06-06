import { Outlet } from 'react-router-dom' 
import Footer from './Componentes/Navlateral/Footer/Footer'
import Navlateral from './Componentes/Navlateral'

function App() {
  return (
    <>
      <Navlateral/>
      
      <Outlet/>
      
      <Footer/>
    </>
  )
}

export default App
