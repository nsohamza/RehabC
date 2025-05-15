import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-[#cbe2ee] py-8 '>
        <section className='flex justify-between items-center'>
        <div className='ml-20 capitalize text-3xl font-mono '>Rehab Clinic </div>
        <div className='flex items-center space-x-4 mr-18 text-lg font-bold'>
          <ul className='flex space-x-10'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Therapist</Link>
            </li>
            <li>
              <Link href="/">Pages</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
        </ul>
        <button className='bg-[#385f71] hover:bg-[#ffae73] rounded-3xl px-8 py-3 '> Get Started</button>
        </div>
        
        
        </section>
    
    </nav>
  )
}

export default Navbar