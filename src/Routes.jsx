import { Routes, Route } from 'react-router-dom'
import RecognitionSpeech from './pages/SpeechRecognition/SpeechRecognition'
import GetStarted from './pages/GetStarted/GetStarted'

export default function (Props) {
    return (
        <>
        <Routes>
        <Route exact path='/' element={<GetStarted />} />
            <Route exact path='/pt-br' element={<RecognitionSpeech/>} />
        </Routes>
        </>
    )
}