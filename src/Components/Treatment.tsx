import React from 'react'

const Treatment = () => {
  return (
    <section className='w-screen h-screen py-8 '>
          <div className='text-center '>
            <h1 className='capitalize text-7xl mt-60  font-bold '> drug & alcohol addiction <br /> treatment center</h1>
            <p className='mt-10 text-3xl tracking-wide'> <span className='capitalize'>compassionate, </span>down-to-earth care for people <br /> with substance use disorder. </p>
          </div>
          <div className='flex items-center text-xl mt-15 '>
            <div className='flex-1'></div>
            <div className='flex-1'>
               <p className='leading-relaxed text-xl'>When you’re struggling with alcohol or drug <br /> 
                dependence or mental health issues, you deserve <br />
                the best level of care. We have two medical centers <br />
                providing sophisticated medical services onsite <br />
                24/7, and offer inpatient treatment for patients 16 <br />
                and older, as well as outpatient treatment options at <br />
                our locations along the East Coast.
            </p>
         <button className='mt-10 rounded-4xl bg-[#bde1f7] hover:bg-[#385f71] px-10 py-4 font-bold text-base uppercase'>About the center</button>
            </div>
          
          </div>
         


    </section>
  )
}

export default Treatment




