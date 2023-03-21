import { Routes, Route } from 'react-router-dom'
import English from './pages/SpeechRecognition/English'
import GetStarted from './pages/GetStarted'
import Spanish from './pages/SpeechRecognition/Spanish'
import Portuguese from './pages/SpeechRecognition/Portuguese'
import { Languages } from './data/Languages'

export default function () {

    return (
            <Routes>
                <Route path='/' element={<GetStarted />} />
                <Route path={`/${Languages[0].miclang}`} element={<English />} />
                <Route path={`/${Languages[1].miclang}`} element={<Spanish />} />
                <Route path={`/${Languages[2].miclang}`} element={<Portuguese />} />
            </Routes>
    )
}