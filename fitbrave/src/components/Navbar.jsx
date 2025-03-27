import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='shadow-2xs flex items-center justify-between py-5 font-medium bg-gradient-to-r from-[#04BECD] via-[#3582D8] to-[#7A2DE7] p-4 rounded-2xl mt-2'>
      <Link to='/'><img src={assets.logo} className='w-36' alt='Logo' /></Link>
      <ul className='hidden sm:flex gap-5 text-sm'>
        <NavLink className='flex flex-col items-center gap-1 group relative' to='/'>
          <p className='text-white'>Início</p>
          <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#04BECD] to-[#FFD700] transition-all duration-300 group-hover:w-full'></div>
        </NavLink>
        
        <NavLink className='flex flex-col items-center gap-1 group relative' to='/collection'>
          <p className='text-white'>Coleções</p>
          <div className='absolute bottom-0 left-0 w-2 h-[2px] bg-gradient-to-r from-[#04BECD] to-[#FFD700] transition-all duration-300 group-hover:w-full'></div>
        </NavLink>
        
        <NavLink className='flex flex-col items-center gap-1 group relative' to='/about'>
          <p className='text-white'>Sobre</p>
          <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#04BECD] to-[#FFD700] transition-all duration-300 group-hover:w-full'></div>
        </NavLink>
        
        <NavLink className='flex flex-col items-center gap-1 group relative' to='/contact'>
          <p className='text-white'>Contatos</p>
          <div className='absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#04BECD] to-[#FFD700] transition-all duration-300 group-hover:w-full'></div>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt='' />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt='' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded mt-5'>
              <p className='cursor-pointer hover:text-black'>Meu Perfil</p>
              <p className='cursor-pointer hover:text-black'>Ordens</p>
              <p className='cursor-pointer hover:text-black'>Sair</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'></p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='' />
      </div>
      
      {/* SideBar menu para telas pequenas */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180 ' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          <NavLink onClick={()=> setVisible(false)}className='py-2 pl-6 border-1 border-b-neutral-400 text-black transition-all duration-300 hover:bg-gradient-to-r from-[#04BECD] via-[#3582D8] to-[#7A2DE7] hover:text-white' to='/'>HOME</NavLink>
          <NavLink onClick={()=> setVisible(false)}className='py-2 pl-6 border-1 border-b-neutral-400 text-black transition-all duration-300 hover:bg-gradient-to-r from-[#04BECD] via-[#3582D8] to-[#7A2DE7] hover:text-white' to='/collection'>COLEÇÃO</NavLink>
          <NavLink onClick={()=> setVisible(false)}className='py-2 pl-6 border-1 border-b-neutral-400 text-black transition-all duration-300 hover:bg-gradient-to-r from-[#04BECD] via-[#3582D8] to-[#7A2DE7] hover:text-white' to='/about'>SOBRE</NavLink>
          <NavLink onClick={()=> setVisible(false)}className='py-2 pl-6 border-1 border-b-neutral-400 text-black transition-all duration-300 hover:bg-gradient-to-r from-[#04BECD] via-[#3582D8] to-[#7A2DE7] hover:text-white' to='/contact'>CONTATO</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
