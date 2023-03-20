import { Routes, Route } from 'react-router-dom'
import English from './pages/SpeechRecognition/English'
import GetStarted from './pages/GetStarted'
import Spanish from './pages/SpeechRecognition/Spanish'
import Portuguese from './pages/SpeechRecognition/Portuguese'

export default function () {

    return (
            <Routes>
                <Route path='/' element={<GetStarted />} />
                <Route path={`/en`} element={<English />} />
                <Route path={`/es`} element={<Spanish />} />
                <Route path={`/pt`} element={<Portuguese />} />
            </Routes>
    )
}