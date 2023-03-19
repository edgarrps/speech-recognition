import { Routes, Route } from 'react-router-dom'
import English from './pages/SpeechRecognition/English'
import Spanish from './pages/SpeechRecognition/Spanish'
import Portuguese from './pages/SpeechRecognition/Portuguese'
import GetStarted from './pages/GetStarted'
import { language } from './utils/Recognition'

export default function () {
    return (
        <>
        <Routes>
        <Route path='/' element={<GetStarted />} />
            <Route path={`/${language[0]}`} element={<English/>} />
            <Route path={`/${language[1]}`} element={<Spanish/>} />
            <Route path={`/${language[2]}`} element={<Portuguese/>} />
        </Routes>
        </>
    )
}