import React from 'react'
import Product7 from '../../assets/images/Card big.png'
import Product8 from '../../assets/images/Card list.png'
import Image from 'next/image'

export const Disproducts = () => {
  return (
    <div className= 'mx-36 mt-60 sm:mx-36 sm:mt-12'>
        <div className='font-bold text-4xl mb-8'>
            Heading
        </div>
    <div className=' grid grid-cols-2 gap-4 'style={{objectFit:'cover'}}>
        <Image className='h-[700px]'src={Product7} alt='product'/>
        <Image src={Product8} alt='product'/>

        </div>
    </div>
  )
}
