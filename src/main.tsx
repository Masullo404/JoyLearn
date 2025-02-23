import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/App.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import App from './pages/home.tsx'
import NavBar from './components/layout/nav.tsx'
import Footer from './components/layout/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <NavBar />
        <App/>
      <Footer />
  </StrictMode>,
)
