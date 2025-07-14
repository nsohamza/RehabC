import Approach from '@/Components/Approach'
import HeroSection from '@/Components/HeroSection'
import Navbar from '@/Components/Navbar'
import Treatment from '@/Components/Treatment'
import Programs from '@/Components/Programs'


import React from 'react'
import Plans from '@/Components/Plans'
import Resource from '@/Components/Resource'
import Footer from '@/Components/Footer'
import Contact from '@/Components/Contact'

export default function Home() {
  return (
    <div>

       <Navbar/>
      <HeroSection/>
      <Treatment/>
      <Approach/>  
      <Programs/>
      <Plans/>
      <Resource/>
      <Contact/>
      <Footer/>
   
    </div>
  )
}