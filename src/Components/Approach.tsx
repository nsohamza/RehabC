import React from "react";
import rehabImage from "@/assets/pixels.jpg";
import Image from "next/image";

const Approach = () => {
  return (
    <section className="flex shadow-inner mt-20">
      <div className="flex-1 h-auto relative">
        <Image src={rehabImage} 
        alt="Image of rehab"
        fill
        />
      </div>
      <div className="flex-1 bg-[#19212d] justify-items-center text-white py-50">
        <div className="text-left ml-25 text-opacity-100">
           <h1 className="text-7xl font-medium ">
          Expert help for you <br /> and your loved ones
        </h1>
        <p className="py-15 text-xl">
          We understand that addiction isn’t who you are. It’s what you’re up against—physically, <br />
          mentally, emotionally and spiritually. That’s why you will find us right there, at your side, <br />
           with  everything we’ve got:
        </p>
        <div className=" flex justify-between text-xl ">
          <ul className="space-y-2.5 > *" >
          <li>Counselors;</li>
          <li>Medical Experts;</li>
          <li>Therapists;</li>
          </ul>
         <ul className="mr-40 space-y-2.5 > *">
          <li>Religious Guides;</li>
          <li>Support Mentors;</li>
          <li>Wellness Coaches.</li>
         </ul>
        </div>

        <button className="uppercase mt-15 bg-[#ffae72] hover:bg-white rounded-4xl py-4 px-9 text-black font-bold" >Treatment Options </button>
        </div>
       
      </div>
   

    </section>
   
  );
};

export default Approach;
