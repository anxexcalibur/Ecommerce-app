import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div  className='flex flex-col sm:flex-row border border-gray-400 rounded-2xl mt-2 shadow-2xl'>
            {/**ldado esquerdo */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141] sm:p-5'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-4 md:text-base' >Os Produtos Mais Vendido</p>
                    </div>
                    <h1 className='prata-regular text-3x1 sm:py-3 lg:text-5xl leading-relaxed'>Novidades Chegando</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>Compre Agora e Melhore Seu Desempenho</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]' ></p>
                    </div>
                </div>
            </div>
            {/* hero lado direito */}
            <img className="w-full sm:rounded-r-2xl sm:w-1/2  " src={assets.hero_img} alt="" />

    </div>
  )
}

export default Hero
