import React from 'react'
import TitleImage from '../../assets/images/1.png'
import Image from 'next/image'
import { Button } from '../ui/button'


export const Title = () => {
  return (
    <div>
    <div className='flex justify-center mx-12 bg-black'>
        <Image className=' h-[597px] w-[1245px] rounded-xl absolute opacity-100'
        style={{objectFit:'cover'}}
        src={TitleImage}
        alt="TitleImage"
        />
    </div>
    <div className='relative flex flex-col gap-y-8 justify-center h-[400px] sm:h-[597px] items-center '>
        <div className='font-bold   text-white text-4xl sm:text-6xl '>
            Shop Title
        </div>
        <div className='text-lg sm:text-xl px-20 text-white '>
        Subheading with description of your shopping site
        </div> 
        <div>
            <Button className='p-5 text-[15px]'>
                Button
            </Button>
            </div>
        
    </div>
    </div>
  )
}
