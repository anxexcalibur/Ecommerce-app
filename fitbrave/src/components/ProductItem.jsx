import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
const ProductItem = ({id,image,name,price}) => {

const {currency} = useContext(ShopContext);

  return (
    <Link className='text-amber-50 cursor-pointer rounded-3xl bg-gradient-to-r from-[#6C757D]  to-[#14213D] ' to={`/product/${id}`}> 
        <div className='overflow-hidden '>
            <img  className='hover:scale-110 transition ease-in-out rounded-2xl' src={image[0]} alt="" />
        </div>
        <div className='p-3 flex flex-col justify-center'>
          <p className='pt-3 pb-1 text-sm '>{name}</p>
          <p className='text-sm font-medium'>{currency}{price}</p>
        </div>
       
    </Link>
  )
}

export default ProductItem
