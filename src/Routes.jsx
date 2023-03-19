import { Routes, Route } from 'react-router-dom'
import RecognitionSpeech from './pages/SpeechRecognition/SpeechRecognition'
import GetStarted from './pages/GetStarted'
import { language } from './utils/Recognition'

export default function (Props) {
    return (
        <>
        <Routes>
        <Route exact path='/' element={<GetStarted />} />
            <Route exact path={'English' ? `/${language[1]}` 
            : 'Español' ? `/${language[2]}` : `${language[0]}`} element={<RecognitionSpeech/>} />
        </Routes>
        </>
    )
}