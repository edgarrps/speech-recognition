import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

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
            <Link to={'/en'} className={twMerge('link', link)}>English</Link>
            <Link to={'/es'} className={twMerge('link', link)}>Español</Link>
            <Link to={'/pt'} className={twMerge('link', link)}>Português</Link>
        </div>
    )
}