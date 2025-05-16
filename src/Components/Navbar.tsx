import React from 'react'
import Link from 'next/link'

const Navbar = () => {
 
  const navItems = [
    {id:1, name:"Home",path:"/"},
    {id:2, name:"About Us",path:"/about"},
    {id:3, name:"Services",path:"/services"},
    {id:4, name:"Therapists",path:"/therapists"},
    {id:5, name:"Pages",path:"/pages"},
    {id:6, name:"Blog",path:"/blog"}
    ]

  return (
    <nav className='bg-[#cbe2ee] py-8 '>
        <section className='flex justify-between items-center'>
        <div className='ml-20 capitalize text-3xl font-mono '>Rehab Clinic </div>
        <div className='flex items-center space-x-4 mr-18 text-lg font-bold'>
          <ul className='flex space-x-10'>
            {navItems.map((item) => (
             <li key={item.id}>
             <Link href={item.path}>{item.name}</Link>
           </li>
            ))}  
        </ul>
        <button className='bg-[#385f71] hover:bg-[#ffae73] rounded-3xl px-8 py-3 '> Get Started</button>
        </div>
        </section>
    
    </nav>
  )
}

export default Navbar


