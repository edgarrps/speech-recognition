import { Link } from "react-router-dom"
import video from '../../videos/bg.mp4'
import { link } from "./twGetStarted"
import { useState, useEffect } from "react"

export default function GetStarted() {

  const text_ = 'Hello my friend Get Started? Choose your language'

  const [text, setText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(text_.slice(0, text.length + 1))
    }, 100)
    return () => clearTimeout(timeout)

  }, [text])

  return (
    <>
      <header className='absolute text-white 
            top-0 left-0 w-full space-y-1
            py-20 px-24 z-30 
            desktop:text-8xl 
            inter:text-6xl 
            tablet:text-4xl 
            smartphone:text-2xl 
            drop-shadow-md'>
          <div className='blinking-cursor'>{text.slice(0, 15)}</div>
          <div className='blinking-cursor'>{text.slice(16, 28)}</div>
          <div className='blinking-cursor'>{text.slice(29, 49)}</div>
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