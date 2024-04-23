import { Footer } from '@/components/footer/Footer'
import { Title } from '@/components/navbar/Title'
import { NavBar } from '@/components/navbar/navBar'
import { Product } from '@/components/product/Product'
import { Disproducts } from '@/components/product/disproducts'
import React from 'react'


const Home = () => {
  return (
    <main>

     <NavBar />
     <Title />
     <Product />
     <Disproducts />
     <Footer />
    </main>
  )
}

export default Home