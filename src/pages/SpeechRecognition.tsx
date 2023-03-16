export default function SpeechRecognition () {
    return(
        <div className='grid place-items-center space-y-10 pt-20'>
            <textarea className='rounded-md bg-gradient-to-r from-stone-200 via-purple-200 to-pink-300 w-[700px] h-[400px] resize-none pl-4 pt-4 pr-4 focus:outline-0'></textarea>
            <button className='rounded-md bg-green-600 font-extrabold text-white pl-2 pr-2'>Clique</button>
        </div>
    )
}