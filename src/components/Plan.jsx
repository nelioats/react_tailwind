import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16  px-4 grid lg:grid-cols-2 gap-4'>
        {/* left side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1673973/pexels-photo-1673973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
        </div> 
        {/* right side   */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Conheça as belezas da Ilha</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, in?</p>
            <p className='pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptatem praesentium ipsam, facere rerum eaque sapiente a hic nisi, distinctio veniam amet labore, consequatur ducimus. Molestias consequuntur iure tempore esse!</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Saiba mais</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Pesquisar reservas</button>
            </div>
        </div>
    </div>
  )
}

export default Plan