import React from 'react'
import { Button } from '../ui/button'
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBar = () => {
  return (
    <div className=' flex items-center justify-between p-12 '>
        <div className='font-medium'>
            site name
        </div>

        <div className='sm:hidden'>
            <RxHamburgerMenu/>
        </div>

        <div className='hidden sm:flex gap-4'>
            <div>
                <Button variant={"link"} className='text-[16px]'> 
                page
                 </Button>
            </div>
            <div>
            <Button variant={"link"} className='text-[16px]'> 
                page
                 </Button>
            </div>
            <div>
            <Button variant={"link"} className='text-[16px]'> 
                page
                 </Button>
            </div>
            <div className='ml-4'>
            <Button  className='text-[16px]'> 
               Button
                 </Button>
            </div>
        </div>
    </div>
  )
}
