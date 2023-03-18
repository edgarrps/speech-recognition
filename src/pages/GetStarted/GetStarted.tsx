import { Link } from "react-router-dom"
import video from '../../videos/bg.mp4'
import { header, link } from "./twGetStarted"

export default function GetStarted() {
    return (
        <>
        <header className={header}>
            Olá, amig@ &#128513;
        </header>
            <div className='bg-black'>
                <video className='absolute w-full h-full object-cover opacity-50' src={video} muted loop autoPlay />
                <div className='flex justify-center align-center items-center'>
                    <Link to={'./pt-br'} className={link}>Start</Link>
                </div>
            </div>
        </>
    )
}