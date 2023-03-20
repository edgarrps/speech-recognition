import { twMerge } from 'tailwind-merge'

export const textArea = twMerge(`
typewriter animate-typewriter 
rounded-md bg-sky-500/[.2] 
text-white font-mono font-semibold text-2xl 
pl-4 pr-20 py-4 mb-2 overflow-y-hidden 
resize-none 
focus:outline-0 
focus:shadow-xl 
focus:ease-in-out duration-300 
desktop:w-[700px] 
laptop:w-[600px] 
tablet:w-[500px] 
mobile:w-[300px]
`)

export const toggle = twMerge(`
w-11 h-6 bg-gray-200 
peer-focus:outline-none 
peer-focus:ring-blue-300
rounded-full
peer 
peer-checked:animate-spin
peer-checked:after:translate-x-full 
peer-checked:after:border-white 
after:content-[""] 
after:absolute after:top-[2px] 
after:left-[2px] after:bg-white 
after:border-gray-300 after:border 
after:rounded-full after:h-5 after:w-5 
after:transition-all 
peer-checked:bg-pink-500
peer-focus:shadow-2xl
peer-focus:ease-in-out duration-300
outline-0`
)