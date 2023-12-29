import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate= useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[9rem] border m-3 transition-all cursor-pointer '>
    <div className='h-[12rem]'>
        <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        <p  className='font-bold opacity-60'>{product.brand}</p>
            <p className=''>{product.title}</p>
        
        
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'>{product.discountedPrice}</p>
            <p className='opacity-50 line-through'>{product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discountPersent}</p>
        </div>
        
    </div>
   </div>
  )
}

export default ProductCard