import { Link, useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Languages } from '../data/Languages'
import { Language } from '../types/Language'
import { mic } from '../utils/Recognition'

type Props = {
    lang: Language
    map: any
}

export const Links = ({ lang }: Props) => {
    mic.lang = lang.miclang
    const navigation = useNavigate()
    const link = 'pl-2 pr-2 bg-green-500 rounded-md 1 hover:bg-green-400 hover:scale-110 ease-in-out duration-300'

    return (
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
            {lang.map((value: string, i: number) => (
                // <Link onClick={handleItemClick} key={i} to={`/${value.miclang}`} className={twMerge('link', link)}>{value.title}</Link>
                <div onClick={() => { navigation(`/speech-recognition/${lang.miclang}`) }} key={i} className={twMerge('link', link)}>{value.title}</div>
            ))}</div>
    )
}
