import { useSpeechRecognition } from 'react-speech-recognition'

export default function SpeechRecognition() {

    return (
        <div className='grid place-items-center space-y-10 pt-20'>
            <textarea className='rounded-md bg-sky-500/[.2] text-white font-mono font-semibold text-2xl w-[700px] h-[400px] resize-none pl-4 pt-4 pr-4 focus:outline-0'></textarea>
            <button className='rounded-md bg-yellow-600/[.6] hover:bg-yellow-400/[.6] active:bg-yellow-500 font-extrabold text-white pl-2 pr-2'>Clique</button>
        </div>
    )
}