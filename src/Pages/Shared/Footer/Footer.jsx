import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-accent text-base-content">
        <div>
          <h1 className="text-secondary text-3xl font-bold">LaptopZone</h1>
          <p className="text-white">LaptopZone is the fastest  online <br/> used laptop marketplace</p>
          
        </div>
        <div>
          <span className="text-secondary font-bold text-xl">Category</span>
          <a href="/" className="link link-hover font-bold text-white">
            Hp laptop
          </a>
          <a href="/" className="link link-hover font-bold text-white">
            Dell Laptop
          </a>
          <a href="/" className="link link-hover font-bold text-white">
           Accer Laptop
          </a>
          <a href="/" className="link link-hover font-bold text-white">
            Asus Laptop
          </a>
        </div>
        <div>
          <span className="text-secondary font-bold text-xl">Company</span>
          <a href="/" className="link link-hover font-bold text-white">
            About us
          </a>
          <a href="/" className="link link-hover font-bold text-white">
            Contact
          </a>
          <a href="/" className="link link-hover font-bold text-white">
            Jobs
          </a>
        
        </div>
        <div>
          <span className="text-secondary font-bold text-xl">Legal</span>
          <a href="/" className="link link-hover font-bold text-white">
            Terms of use
          </a>
          <a href="/" className="link link-hover font-bold text-white">
            Privacy policy
          </a>
          <a href="/" className="link link-hover font-bold text-white">
            Cookie policy
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
