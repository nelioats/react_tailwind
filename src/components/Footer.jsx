import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Pontos Principais</h6>
                <ul>
                    <li className='py-1'>Ilha</li>
                    <li className='py-1'>Litoranea</li>
                    <li className='py-1'>Alcantara</li>
                    <li className='py-1'>São Jose de Ribamar</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Suporte</h6>
                <ul>
                    <li className='py-1'>Valores</li>
                    <li className='py-1'>Politicas</li>
                    <li className='py-1'>Visão</li>
                    <li className='py-1'>Compromisso</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Quem somos</h6>
                <ul>
                    <li className='py-1'>Equipe</li>
                    <li className='py-1'>Objetivos</li>
                    <li className='py-1'>Acessorios</li>
                    <li className='py-1'>Portfolio</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Privacidade</li>
                    <li className='py-1'>Documentos</li>
                    <li className='py-1'>CEO</li>
                    <li className='py-1'>Registro</li>
                </ul>
            </div>

            <div className='col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase'>Receba nossas novidades</p>
                <p className='py-4'>Você ficará por dentro das melhores condições</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Envia seu e-mail...'/>
                    <button className='p-2 mb-4 rounded-md'>Enviar</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2023 - Experinecias Todas direitos reservados!</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <TiSocialPinterest size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer