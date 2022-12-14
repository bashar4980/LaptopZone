import React from "react";


const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-primary ">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img src="hero.svg" alt="banner" className="max-w-sm  lg:w-1/2 rounded-lg " />
          <div className="lg:w-1/2  ">
            <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold text-black">
              Promote any of your used <span className="text-secondary">Laptop</span> & <span className="text-secondary">earn money</span> within our vast network
            </h1>
            <p className="py-6 text-neutral text-justify" >
            LaptopZone is the fastest online marketplace for used laptop in Bangladesh. Start buying and selling today! Make shopping SIMPLE, SECURE and FAST on the largest marketplace in Bangladesh. Discover what you need and sell all sorts of products in our simple yet powerful platform.
            </p>
            <button className="btn btn-secondary font-bold text-white hover:bg-transparent hover:text-secondary transition duration-500 ease-in-out ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// src="https://www.mambaui.com/assets/svg/Business_SVG.svg"
