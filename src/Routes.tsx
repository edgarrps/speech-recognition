import { Routes, Route, useParams } from 'react-router-dom'
import GetStarted from './pages/GetStarted'
import { eng, esp, por } from './utils/Recognition'
import English from './pages/English'
import Spanish from './pages/Spanish'
import Portuguese from './pages/Portuguese'
export default function () {

    return (
        <Routes>
            <Route path='/' element={<GetStarted />} />
            <Route path={`/${eng}`} element={<English />}/>
            <Route path={`/${esp}`} element={<Spanish />}/>
            <Route path={`/${por}`} element={<Portuguese />}/>
        </Routes> 
    )
}