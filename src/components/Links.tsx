import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Languages } from '../data/Languages'

export const Links = () => {

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
            {Languages.map((value, i) =>
                <Link key={i} to={`/${value.miclang}`} className={twMerge('link', link)}>{value.title}</Link>
            )}</div>
    )
}
