import { Routes, Route, useParams } from 'react-router-dom'
import GetStarted from './pages/GetStarted'
import SpeechRecognition from './pages/SpeechRecognition'
export default function () {

    return (
        <Routes>
            <Route path='/' element={<GetStarted />} />
            <Route path={`/speech-recognition/:lang`} element={<SpeechRecognition />}/>
        </Routes>
    )
}