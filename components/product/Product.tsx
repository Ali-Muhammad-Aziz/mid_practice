import React from 'react'
import Product1 from '../../assets/images/p1.png'
import Product2 from '../../assets/images/p2.png'
import Product3 from '../../assets/images/p3.png'
import Product4 from '../../assets/images/p4.png'
import Product5 from '../../assets/images/p5.png'
import Product6 from '../../assets/images/p6.png'
import Image from 'next/image'



export const Product = () => {
    const product = [
        {
            pNo: 1,
            image:Product1,
            title:"product",
            des: "Description of the product",
            price: "10$" 
        },
        {
            pNo: 2,
            image:Product2,
            title:"product",
            des: "Description of the product",
            price: "10$" 
        },
        {
            pNo: 3,
            image:Product3,
            title:"product",
            des: "Description of the product",
            price: "10$" 
        },
        {
            pNo: 4,
            image:Product4,
            title:"product",
            des: "Description of the product",
            price: "10$" 
        },
        {
            pNo: 5,
            image:Product5,
            title:"product",
            des: "Description of the product",
            price: "10$" 
        },
        {
            pNo: 6,
            image:Product6,
            title:"product",
            des: "Description of the product",
            price: "10$" 
        },
    ]
  return (
    <div className= 'mx-36 mt-60 sm:mx-36 sm:mt-12'>
        <div className='font-bold text-4xl mb-8'>
            Heading
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3  sm:grid-rows-2 gap-4'>
            {product.map((product) =>{
                return(
                    <div key={product.pNo}>
                        <div>
                            <Image src={product.image} alt='product' />
                        </div>
                        <div className='font-medium mt-6'>
                            {product.title}
                        </div>
                        <div className='mt-2'>
                           {product.des}
                        </div>
                        <div className='mt-2'>
                            {product.price}
                        </div>
                    </div>

                )
            }
        
        
        )}
            <div>

            </div>




        </div>
    </div>
  )
}
