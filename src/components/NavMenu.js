import React, { useState } from 'react';
import '../App.css';
import logo from '../logo.svg'

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };
  // #c3d1ff
  return (
    <div id="myNav" className={`overlay ${isOpen ? 'open' : ''}`}>
    <a href="#close" className="closebtn" onClick={closeNav}>&times;</a>
    <div className="overlay-content">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  </div>
    // <div className="menu-content">
    //   <a href="/">Home</a>
    //   <a href="/DesignAndBuild">Design & build</a>
    //   <a href="/Manufacturing">Manufacturing</a>
    //   <a href="/Projects">Projects</a>
    //   <a href="/AwardsAndTestimonials">Press, Awards & Testimonials</a>
    //   <a href="/Career">Career</a>
    // </div>
  );
};

export default NavMenu;
