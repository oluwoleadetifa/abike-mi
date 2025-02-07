import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ValentinePage from './ValentinePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ValentinePage/>
  </StrictMode>,
)
