import { Link } from "react-router-dom"
import video from '../../videos/bg.mp4'
import { link } from "./twGetStarted"
import { useState, useEffect } from "react";

export default function GetStarted() {

    const first_text = 'Hello my friend';
    const second_text = 'Get Started?';
    const third_text = 'Choose your language';
  
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setText1(first_text.slice(0, text1.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }, [text1]);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setText2(second_text.slice(0, text2.length + 1));
      }, 250);
  
      return () => clearTimeout(timeout);
    }, [text2]);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setText3(third_text.slice(0, text3.length + 1));
      }, 300);
  
      return () => clearTimeout(timeout);
    }, [text3]);
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
                {}
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