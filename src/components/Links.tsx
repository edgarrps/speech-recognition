import { language } from "../utils/Recognition"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

export const Links = () => {

    const link = 'pl-2 pr-2 bg-green-500 rounded-md 1 hover:bg-green-400 hover:scale-105 ease-in-out duration-300'
      const lang = ['English', 'Español', 'Português']

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
            <Link to={`/${language[0]}`} className={twMerge('link', link)}>{lang[0]}</Link>
            <Link to={`/${language[1]}`} className={twMerge('link', link)}>{lang[1]}</Link>
            <Link to={`/${language[2]}`} className={twMerge('link', link)}>{lang[2]}</Link>
        </div>
    )
}