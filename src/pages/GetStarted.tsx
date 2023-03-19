import { Link, Route, Routes } from "react-router-dom"
import video from '../videos/bg.mp4'
import { useState, useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { language } from "../utils/Recognition"

export default function GetStarted() {
  const [text, setText] = useState('')
  const text_ = 'Hello my friend Get Started? Choose your language'
  const link = 'pl-2 pr-2 bg-green-500 rounded-md 1'
  const lang = ['English', 'Español', 'Português']

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
          <div className='absolute 
                desktop:top-[530px]
                inter:top-[530px]
                tablet:top-[430px]
                smartphone:top-[300px]
                flex 
                text-white 
                desktop:space-x-10
                inter: space-x-6
                tablet: space-x-4
                smartphone: space-x-2 fadein 10'>
            <Link to={`/${language[0]}`} className={twMerge('link', link)}>{lang[0]}</Link>
            <Link to={`/${language[1]}`} className={twMerge('link', link)}>{lang[1]}</Link>
            <Link to={`/${language[2]}`} className={twMerge('link', link)}>{lang[2]}</Link>
          </div>
        </div>
      </div>
    </>
  )
}