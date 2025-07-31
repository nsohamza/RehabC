import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ResidentialImage from '@/assets/residential.jpg';
import MentalImage from '@/assets/mental.jpg';
import alumniImage from '@/assets/alumni.jpg';
import addictionImage from '@/assets/addiction.jpg'
import inpatientImage from '@/assets/inpatient.jpg'
import rehabImage from '@/assets/rehab.jpg'
import Image from "next/image";

const Programs = () => {

  const programmes = [
    {
      id:1,
      title: 'Addiction Therapy',
      image: addictionImage
    },
    {
      id:2,
      title: 'Drugs Rehab',
      image: rehabImage
    },
    {
      id:3,
      title: 'Alumni Program',
      image: alumniImage
    },
    {
      id:4,
      title: 'Inpatient Detox',
      image: inpatientImage
    },
    {
      id:5,
      title: 'Residential Care',
      image: ResidentialImage
    },
    {
      id:6,
      title: 'Mental Rehab',
      image: MentalImage
    }
  ]

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true
    }
  
  return (
    <section className='h-screen mt-35' >
      <div className='text-center my-10'>
       <h2 className='text-lg uppercase my-2 text-gray-500'>what we offer</h2>
       <h1 className='text-7xl capitalize my-4'>Our programs</h1>
      </div>
      <Slider{...settings}>
        {
          programmes.map((program) => (
            <div key={program.id} className ='p-4'>
              <div className='bg-[#BDE1F7] p-5 h-140 overflow-hidden flex flex-col justify-between'>
                <div className='p-3 relative' >
                  <h3 className='text-xl font-semibold text-gray-700'>{program.title}</h3>
                  <Image 
                    src = {program.image}
                    alt = {program.title}
                    className='absolute h-[400px] top-17 ml-5 object-cover rounded-xl ring-8 shadow-xl'
                  />
                </div>
                <div className='flex justify-between items-center '>
                  <h3 className='uppercase text-md font-bold ml-9'>read more</h3>
                  <span className='text-2xl'>→</span>

                </div>
              </div>

            </div>
          )
        )
        }
      </Slider>

    </section>
  
    
  )
}

export default Programs







