import { useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { textArea, toggle } from './twSpeechRecognition'
import { mic } from '../utils/Recognition'

export default function Speech() {
    const [hear, setHear] = useState(false)
    const [note, setNote] = useState('')
    const handleClick = () => setHear(prevState => !prevState)
    
    useEffect(() => { handleHear() }, [hear])
    const handleHear = () => hear ? mic.start() : mic.stop()
    mic.onresult = e => {
        const transc = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('')
        setNote(transc)
    }
    mic.onerror = () => <span>Failed...</span>

    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen'>
            <div className='grid place-items-center space-y-10 pt-20'>
                <TextareaAutosize value={note} className={textArea} />
                <label className='relative inline-flex items-center cursor-pointer'>
                    <input onClick={handleClick} type='checkbox' className='sr-only peer' />
                    <div className={toggle} />
                    <span className='ml-3 text-sm font-medium text-gray-900'></span>
                </label>
            </div>
        </div>
    )
}