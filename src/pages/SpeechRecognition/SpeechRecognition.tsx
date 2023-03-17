import { useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { textArea, toggle } from './twSpeechRecognition'
import { mic } from '../../utils/Recognition'

export default function SpeechRecognition() {
    const [hear, setHear] = useState(false)
    const [note, setNote] = useState('')
    const handleClick = () => setHear(prevState => !prevState)

    useEffect(() => { handleHear() }, [hear])
    const handleHear = () => hear ? mic.start() : mic.stop()
    mic.onresult = e => {
        const transc = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('')
        setNote(transc)
    }
    mic.onerror = () => <span>Não consegui te entender, pode repetir? Verifique se seu microfone está habilitado para uso aqui...</span>

    return (
        <div className='grid place-items-center space-y-10 pt-20'>
            <TextareaAutosize value={note} className={textArea} />
            <label className='relative inline-flex items-center cursor-pointer'>
                <input onClick={handleClick} type='checkbox' className='sr-only peer' />
                <div className={toggle} />
                <span className='ml-3 text-sm font-medium text-gray-900'></span>
            </label>
        </div>
    )
}