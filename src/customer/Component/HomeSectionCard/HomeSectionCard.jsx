import React from 'react'

export const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col justify-center items-center bg-white hover:bg-gray-100 rounded-lg shadow-lg overflow-hidden  w-[13 rem] mx-1'>
      <div className='w-[10rem] h-[15rem]'>
        <img className='w-full h-full object-cover' src={product.imageUrl} alt="" />

      </div>
      <div className='p-5 space-y-2'>
        <h3 className='text-lg font-semibold font color-black'>{product.title}</h3>
        <p className='text-sm font-semibold font color-black'>{product.price}</p>
      </div>

    </div>
  )
}
