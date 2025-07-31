import React from "react";

const Footer = () => {
  return (
    <footer className="h-180 flex ">
      <div className="flex flex-col bg-[#19212d] text-white p-20 flex-1/4 ">
        {/* Pages part */}
        <div className="flex gap-37">
          <h3 className="text-4xl capitalize">Rehab clinic </h3>
          <div>
            <h3 className="text-2xl capitalize mb-4 ">pages</h3>
            <ul className="capitalize space-y-4">
              <li>about us</li>
              <li>Our team</li>
              <li>our services</li>
              <li>Blog page</li>
              <li>Contacts</li>
              <li>Image Credits</li>
            </ul>
          </div>

          {/* Contacts part */}
          <div>
            <h3 className="text-2xl mb-4">Contacts</h3>
            <p className="mb-4 text-base text-gray-400">
              511 SW 10th Ave 1206,
              <br />
              Portland, OR <br />
              United States
            </p>
            <p className="mb-4 "> +1 800-123-1234</p>
            <p className="leading-relaxed">rehab@test.com</p>
          </div>
        </div>

        <div className=" mt-35 space-y-4">
          <h2 className="capitalize text-3xl mb-4">Stay Updated</h2>
          <input
            type="email"
            placeholder="Your email address....*"
            className=" w-6/8 border-b"
          />
          <button className="border rounded-3xl px-8 py-2 uppercase bg-[#bde1f7] hover:bg-[#385f71] font-bold text-md ">
            Subscribe
          </button>
          <p className="mt-4 leading-relaxed text-gray-400">
            This is a sample website - masters © 2025 - All Rights Reserved
          </p>
        </div>
      </div>

      {/* CONTACT FORM SIDE */}
      <section className="bg-gradient-to-b from-blue-200 to-orange-300 p-20 flex-1">
        <h2 className="text-4xl mb-8">Ready to take the next step?</h2>
        <form className="space-y-12 text-xl">
          <div className="flex gap-4">
            <input type="text" placeholder="Your Name" className="border-w" />
            <input type="text" placeholder="Your Phone" className="border-w" />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="border-b w-full"
          />
          <textarea
            placeholder="Message"
            className="border-b w-full"
          ></textarea>
          <h3>I am seeking treatment for*</h3>
          <div className="gap-10 space-x-4">
            <label>
              <input type="radio" name="for" /> Myself
            </label>
            <label>
              <input type="radio" name="for" /> Someone else
            </label>
          </div>
          <button className="bg-blue-200 hover:bg-[#385f71] rounded-full px-8 py-4 uppercase font-semibold">Submit</button>
        </form>
      </section>
    </footer>
  );
};

export default Footer;
