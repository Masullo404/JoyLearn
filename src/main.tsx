import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/App.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Inicio from './pages/inicio.tsx'
import NavBar from './components/layout/nav.tsx'
import Footer from './components/layout/footer.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Sobre from './pages/sobre.tsx'
import RecursosPage from './pages/recursos.tsx'
import ContatoPage from './pages/contato.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio/>}/>        
            <Route path='sobre' element={<Sobre/>}/>        
            <Route path='recursos' element={<RecursosPage/>}/>        
            <Route path='contato' element={<ContatoPage/>}/>        
          </Routes>
        </BrowserRouter>
      <Footer />
  </StrictMode>,
)
