import { useState, useEffect } from "react"

export const Text = () => {
    const text_ = `Hello my friend Let's get started? Choose your language`
    const [text, setText] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {setText(text_.slice(0, text.length + 1))}, 100)
        return () => clearTimeout(timeout)
    }, [text])

    return (
        <header className='absolute text-white 
        top-0 left-0 w-full space-y-1
        py-20 px-24 z-30 
        desktop:text-8xl 
        inter:text-6xl 
        tablet:text-4xl 
        smartphone:text-2xl 
        drop-shadow-md'>
            <div className='blinking-cursor'>{text.slice(0, 15)}</div>
            <div className='blinking-cursor'>{text.slice(16, 34)}</div>
            <div className='blinking-cursor'>{text.slice(34)}</div>
        </header>
    )
}