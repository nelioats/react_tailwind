import React, {useState} from 'react'
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImagesSlider = () => {

    const slides = [{
        url:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Arvore solitária',
    },
    {
        url:'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Arco da ilha',
    },
    {
        url:'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Aguas perigosas',
    },
    {
        url:'https://images.pexels.com/photos/6127892/pexels-photo-6127892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Ganço',
    },
    {
        url:'https://images.pexels.com/photos/870711/pexels-photo-870711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Picos',
    }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {

        //capturando o indice atual
        const isFirstSlide = currentIndex === 0 
        //isFirstSlide é verdadeiro se currentIndex for igual a 0.
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
         // Sendo zero pega o comprimento e diminui -1 (no exmplo de 5 imagens, comprimento é 5 - 1, obetendo a imagem 4 que no caso é a ultima pois a lista de imagens comeca com 0), obtendo a ultima imagem.
         //nao sendo zero, pega o ultimo index e diminui 1
        setCurrentIndex(newIndex)

    }

    const nextSlide = () => {

        //capturando o indice atual
        const isLastSlide = currentIndex === slides.length - 1 
        //isLastSlide é verdadeiro se currentIndex for igual ao comprimento do slide -1.
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        // Sendo o comprimento total do slide, quer dizer q tem q retornar para o primeiro slide(indice) que é 0.
        // senao for o comprimento total, apenas soma um indice ao atual.
        setCurrentIndex(newIndex)
        
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slides[currentIndex].url})`}}>

        </div>
        {/* left arrow */}
         <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
         </div>
        {/* right arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImagesSlider