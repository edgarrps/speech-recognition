import { Routes, Route } from 'react-router-dom'
import Eses from './pages/SpeechRecognition/Eses'
import Enus from './pages/SpeechRecognition/Enus'
import Ptbr from './pages/SpeechRecognition/Ptbr'
import GetStarted from './pages/GetStarted'
import { language } from './utils/Recognition'

export default function (Props) {
    return (
        <>
        <Routes>
        <Route exact path='/' element={<GetStarted />} />
            <Route exact path={`/${language[0]}`} element={<Enus/>} />
            <Route exact path={`/${language[1]}`} element={<Eses/>} />
            <Route exact path={`/${language[2]}`} element={<Ptbr/>} />
        </Routes>
        </>
    )
}