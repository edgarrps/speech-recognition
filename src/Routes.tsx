import { Routes, Route } from 'react-router-dom'
import English from './pages/SpeechRecognition/English'
import GetStarted from './pages/GetStarted'
import Spanish from './pages/SpeechRecognition/Spanish'
import Portuguese from './pages/SpeechRecognition/Portuguese'
import { useEffect } from 'react'
import { mic } from './utils/Recognition'

export const languages = () => {
    if (<Route path={`/en`} element={<English />} />) mic.lang = 'en-US'
    if (<Route path={`/es`} element={<Spanish />} />) mic.lang = 'es-ES'
    if (<Route path={`/pt`} element={<Portuguese />} />) mic.lang = 'pt-BR'
}
export default function () {

    return (
        <>
            <Routes>
                <Route path='/' element={<GetStarted />} />
                <Route path={`/en`} element={<English />} />
                <Route path={`/es`} element={<Spanish />} />
                <Route path={`/pt`} element={<Portuguese />} />
            </Routes>
        </>
    )
}