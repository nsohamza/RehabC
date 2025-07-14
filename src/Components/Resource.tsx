import React from "react";
import Image from "next/image";
import familyImage from "@/assets/image.jpg";

const Resource = () => {
  return (
    <section className="h-svh mt-10 text-black ">
      <h1 className="font-normal text-7xl capitalize text-center">
        Resources & Inspiration
      </h1>

      <div className="flex justify-center mt-35 space-x-6" >
        <div className=" bg-[#BDE1F7] px-8 py-2 w-[400px] relative shadow-2xl">
          <Image 
          src={familyImage} 
          alt="Image of family" 
          className="relative object-cover h-1/2 bottom-12 left-8 shadow-2xl"
          />
          <h3 className="capitalize text-2xl font-semibold ">Online Store</h3>
          <p className="leading-relaxed mt-4 text-lg">
            Browse our online recovery community <br /> bookstore. It’s designed
            expressly for <br />you—with books, gifts and more.
          </p>
          <div className="flex justify-between mt-6">
            <h3 className="uppercase text-base font-bold">read more</h3>
            <span className="text-2xl">→</span>
          </div>
        </div>
 
        <div className=" bg-gradient-to-b from-blue-200 to-orange-300 px-8 py-2 w-[400px] relative shadow-2xl">
          <Image 
          src={familyImage} 
          alt="Image of family" 
          className="relative object-cover h-1/2 bottom-12 left-8 shadow-2xl"
          />
          <h3 className="capitalize text-2xl font-semibold ">Event & Meetups</h3>
          <p className="leading-relaxed mt-4 text-lg">
          Hazelden Betty Fords events bring <br /> people together in healing and hope. <br />See whats coming up and join us soon.
          </p>
          <div className="flex justify-between mt-6">
            <h3 className="uppercase text-base font-bold">read more</h3>
            <span className="text-2xl">→</span>
          </div>
        </div>

        <div className=" bg-[#375f71] px-8 py-2 w-[400px] relative shadow-2xl">
          <Image 
          src={familyImage} 
          alt="Image of family" 
          className="relative object-cover h-1/2 bottom-12 left-8 shadow-2xl"
          />
          <h3 className="capitalize text-2xl font-semibold ">Articles & Resources </h3>
          <p className="leading-relaxed mt-4 text-lg">
          Follow your interests and discover new <br /> insights via our vast collection of <br /> recovery-related blogs.
          </p>
          <div className="flex justify-between mt-6">
            <h3 className="uppercase text-base font-bold">read more</h3>
            <span className="text-2xl">→</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Resource;
