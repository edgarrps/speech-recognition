import React from 'react'
import ReactDOM from 'react-dom/client'
import SpeechRecognition from './pages/SpeechRecognition'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SpeechRecognition />
  </React.StrictMode>,
)