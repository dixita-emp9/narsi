import React, { useState } from 'react';
import '../App.css';
import logo from '../logo.svg'

const LeftContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  // #c3d1ff
  return (
    <div className='left-container' style={{ height: "100vh", width: "21%", position: "fixed" }}>
      <div className="menu-content">
        <a href="/">Home</a>
        <a href="/AboutUs">About Us</a>
        <a href="/DesignAndBuild">Design & build</a>
        <a href="/Manufacturing">Manufacturing</a>
        <a href="/Projects">Projects</a>
        <a href="/FireDoors">Fire Door</a>
        <a href="/AwardsAndTestimonials">Press, Awards & Testimonials</a>
        <a href="/Career">Career</a>
      </div>
    </div>

  );
};

export default LeftContainer;
