import video from '../videos/bg.mp4'
import { useState } from 'react'
import { Links } from '../components/Links'
import { Text } from '../components/Text'
import { useNavigate } from 'react-router-dom';


export default function GetStarted() {
  const [visible, setVisible] = useState(false)
  const render = () => { return visible && <Links />}

  setTimeout(() => {
    setVisible(true)
  }, 6000)

    return (
    <>
      <Text />
      <div className='font-poppins'>
        <video className='absolute w-full h-full object-cover opacity-50' src={video} muted loop autoPlay />
        <div className='flex justify-center align-center items-center'>
        {render()}
        </div>
      </div>
    </>
  )
}