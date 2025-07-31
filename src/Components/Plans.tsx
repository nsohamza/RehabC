import React from 'react'

const Plans = () => {
  return (
    <section className='h-screen mt-4'>
        <div className='flex justify-between px-50 items-center '>
            <h1 className='text-7xl items-center capitalize '>Flexible treatment <br />plans</h1>
            <p className='leading-relaxed text-lg '> No single treatment course works for <br />every person. We provide the flexibility <br /> to create an addiction recovery plan <br /> that is right for you.</p>
        </div>
        
        <div className='flex justify-center p-20 text-white font-bold align-middle'>
           <div className='bg-[#375f71] p-15 h-[405px] mx-4 rounded-lg' >
                <h2 className='text-5xl'>7+ Days</h2>
                <h3 className='mt-6 text-xl font-bold'>Often Covered</h3>
                <ul className='mt-10 leading-8'>
                    <li>&#10003; Mainly limited to detox </li>
                    <li>&#10003; Short time commitment</li>
                    <li>&#10003; Starting point for recovery</li>
                </ul>
                <button className='bg-[#bde1f7] rounded-3xl hover:bg-[#ffffff] uppercase px-4 py-2 text-black font-bold mt-10'>explore details</button>
            </div>
            <div className='bg-[#375f71] p-10 h-[450px] mx-4 rounded-lg'>
                <h2 className='text-5xl'>30+ Days</h2>
                <h3 className='mt-6 text-xl font-bold'>Suggested Minimum Duration</h3>
                <ul className='mt-10 leading-8'>
                    <li>&#10003; Begins with assessment and <br />treatment plan</li>
                    <li>&#10003; Focuses on withdrawal management <br /> and therapy</li>
                    <li>&#10003; Includes customized aftercare plan</li>
                </ul>
                <button className='bg-[#bde1f7] rounded-3xl hover:bg-[#ffffff] uppercase px-4 py-2 text-black font-bold mt-10'>explore details</button>

            </div>
            <div className='bg-[#375f71] p-7 h-[500px] mx-4 rounded-lg'>
                <h2 className='text-5xl'>60+ Days</h2>
                <h3 className='mt-6 text-xl font-bold'>Recommended for Long-Term Recovery</h3>
                <ul className='mt-10 leading-8'>
                    <li>&#10003; Allows time to cement new skills</li>
                    <li>&#10003; Provides structure and stability</li>
                    <li>&#10003; May include outpatient programming <br />or sober living</li>
                    <li>&#10003; Short time commitment</li>
                    <li>&#10003; Starting point for recovery</li>
                </ul>
                <button className='bg-[#bde1f7] rounded-3xl hover:bg-[#ffffff] uppercase px-4 py-2 text-black font-bold mt-10'>explore details</button>
            </div>



        </div>

    </section>
  )
}

export default Plans