import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </React.StrictMode>,
)