import { Link } from "react-router-dom"
import video from '../../videos/bg.mp4'
import { link } from "./twGetStarted"

export default function GetStarted() {
    return (
        <>
            <header className='absolute text-white 
            top-0 left-0 w-full space-y-1
            py-20 px-24 z-30 
            desktop:text-4xl 
            inter:text-2xl 
            tablet:text-2xl 
            smartphone:text-2xl 
            drop-shadow-md'>
                <p>Hello, my friend &#128513;</p>
                <p>Let's do it?</p>
                <p>Choose your language</p>
            </header>
            <div className='font-poppins'>
                <video className='absolute w-full h-full object-cover opacity-50' src={video} muted loop autoPlay />
                <div className='flex justify-center align-center items-center'>
                    <Link to={'./pt-br'} className={link}>Start</Link>
                </div>
            </div>
        </>
    )
}