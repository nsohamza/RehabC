import Image from 'next/image'
import React from 'react'
import familyImage from '@/assets/image.jpg'

const HeroSection = () => {
  return (
    <section className=' bg-gradient-to-b from-blue-200 to-orange-200 flex justify-between justify-items-center h-full shadow-lg ' >
     <div className=' w-1/2 ml-8 mt-12 shadow-md'>
        <p className='mb-4 text-xl uppercase tracking-wider' >we´re here to help you</p>
        <h1 className='text-8xl font-semibold leading-tight capitalize ml-10'>pick yourself <br/>back up - <br/> you´ve got this</h1>
     </div>

     <div className=' w-3/4 relative h-[900px] top-15 '>
       <Image 
       src = {familyImage}
       alt="Image of family" 
       fill
       />

       <div className=' absolute bottom-10 left-10 items-start delay-100'>
       <h2 className='text-4xl italic text-white text-center tracking-wider '>Start a new chapter of your life, today.</h2>
       <button className='uppercase bg-[#bde1f7] hover:bg-[#385f71] text-xl rounded-4xl py-3 px-5 mt-3 font-semibold'>call 24/7: 123-456-7890</button>
       </div>

     </div>

    </section>
  )
}

export default HeroSection


