import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Popular from '@/components/Popular'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="relative h-[650px] bg-home bg-cover bg-left flex flex-col">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Ensure Header is above the overlay */}
        <div className="sticky z-50 ">
          <Header />
        </div>

        {/* Ensure Hero is also above the overlay */}
        <div className="relative z-10 flex items-center  justify-center mt-12">
          <Hero />
        </div>
      </div>
      <div className='bg-white  text-black'>
        <Feature/>
        <Popular/>

      </div>
      <div className='bg-black  text-white'>
        <Footer/>
        

      </div>
    </div>
  )
}

export default Page;
