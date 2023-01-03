import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[45%] md:mb-[65%] px-4 grid lg:grid-cols-3 gap-4 '>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Encontre os melhores hotéis</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae doloremque earum quos hic omnis?</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='row-span-2 object-cover w-full h-full' src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Rooms