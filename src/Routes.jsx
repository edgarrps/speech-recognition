import { Routes, Route } from 'react-router-dom'
import RecognitionSpeech from './pages/SpeechRecognition/SpeechRecognition'

export default function () {
    return (
        <>
        <Routes>
            <Route exact path='/' element={<RecognitionSpeech/>} />
        </Routes>
        </>
    )
}