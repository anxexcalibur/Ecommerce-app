import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm bg-gradient-to-r from-[#7A2DE7] via-[#3582D8] to-[#04BECD] w-full p-6 rounded-lg border-b-black">
      
      <div>
        <img 
          src={assets.logo} 
          className="mb-5 w-32 border-b-2 border-gray-500 rounded-2xl p-1 transition-all hover:border-t-2 hover:border-[#3582D8]" 
          alt="Logo" 
        />
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem. 
          Quibusdam, atque necessitatibus? Non, enim eum. Temporibus iste eaque, 
          dolorem modi fugiat in tempore quo nulla porro, quaerat deleniti quisquam.
        </p>
      </div>

      <div>
        <p className="text-xl font-medium mb-5 text-white">
          <strong>COMPANY</strong>
        </p>
        <ul className="flex flex-col gap-1 text-white">
          <li>HOME</li>
          <li>Sobre nós</li>
          <li>DELIVERY</li>
          <li>POLÍTICA DE PRIVACIDADE</li>
        </ul>
      </div>

      <div>
        <p className="text-xl font-medium mb-5 text-white">
          <strong>Get in touch</strong>
        </p>
        <ul className="flex flex-col gap-1 text-gray-400">
          <li>+55 61 9811-95644</li>
          <li>essenciafit@gmail.com</li>
        </ul>
      </div>

      {/* Seção de Copyright alinhada abaixo das colunas */}
      <div className="col-span-3 text-center mt-5">
        <hr className="border-amber-50 mb-2" />
        <p className="py-2 text-sm text-amber-50">
          Copyright 2025 @ EssenciaBrave.com - All RIGHTS RESERVED.
        </p>
      </div>

    </div>
  );
}

export default Footer;
