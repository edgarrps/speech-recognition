import { Routes, Route } from 'react-router-dom'
import Eses from './pages/SpeechRecognition/Eses'
import Enus from './pages/SpeechRecognition/enus'
import Ptbr from './pages/SpeechRecognition/ptbr'
import GetStarted from './pages/GetStarted'
import { language } from './utils/Recognition'

export default function () {
    return (
        <>
        <Routes>
        <Route path='/' element={<GetStarted />} />
            <Route path={`/${language[0]}`} element={<Enus/>} />
            <Route path={`/${language[1]}`} element={<Eses/>} />
            <Route path={`/${language[2]}`} element={<Ptbr/>} />
        </Routes>
        </>
    )
}