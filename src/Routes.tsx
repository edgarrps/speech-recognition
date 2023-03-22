import { Routes, Route } from 'react-router-dom'
import GetStarted from './pages/GetStarted'
export default function () {

    return (
        <Routes>
            <Route path='/' element={<GetStarted />} />
        </Routes>


    )
}