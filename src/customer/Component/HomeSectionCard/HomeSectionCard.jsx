import React from 'react'

export const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden  w-[20rem] mx-3'>
        <div className='w-[13rem] h-[15rem]'>
            <img className='w-full h-full object-cover' src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32193132/2025/1/3/8243634c-0c19-4a5a-890e-aa808dbe19e51735884731052CampusSutraMenStripedPoloCollarRawEdgeT-shirt1.jpg" alt="" />
            
        </div>
        <div className='p-4 '>
            <h3 className='text-lg font-semibold font color-black'>Men Striped T-Shirt</h3>
            <p className='text-sm font-semibold font color-black'>Rs. 1999</p>
        </div>
        
    </div>
  )
}
