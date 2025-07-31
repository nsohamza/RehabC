import React from "react";

const Contact = () => {
  return (
    <div className="text-center mt-5 h-screen space-y-3">
      <h2 className="text-xl uppercase font-semibold text-[#375f71] ">
        Take the next step{" "}
      </h2>
      <h1 className="text-7xl mt-8">
        Contact us when <br />
        you&apos;re ready{" "}
      </h1>
      <button className="uppercase bg-[#bde1f7] hover:bg-[#385f71] text-md rounded-4xl py-3 px-5 mt-10 font-semibold">
        call 24/7: 123 - 456 - 7890
      </button>
    </div>
  );
};

export default Contact;
