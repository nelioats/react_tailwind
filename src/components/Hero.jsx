import React from 'react'
import imgbanner from '../img/banner01.jpg'


const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src={imgbanner} alt="Foto de Miro Alt no Pexels" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <h1>Praias e hotéis</h1>
                <p className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Ilha Magnética</p>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt atque illum velit eius corporis quod repudiandae.</p>
                <button className='bg-white text-black'>Saiba mais</button>
            </div>
          </div>
    </div>
  )
}

export default Hero