import React, { useEffect, useState } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

import logo from '../logo.svg'

const LeftContainer = () => {


  useEffect(() => {
    document.body.classList.add('static');
    AOS.init({
      duration: 1000, // You can set various options here
    });
  }, []);

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
        <a  href="/" data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Home</a>
        <a href="/AboutUs" data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">About Us</a>
        <a href="/DesignAndBuild" data-aos-delay="400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Design & build</a>
        <a href="/Manufacturing" data-aos-delay="600" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Manufacturing</a>
        <a href="/Projects" data-aos-delay="800" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Projects</a>
        <a href="/FireDoors" data-aos-delay="1000" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Fire Door</a>
        <a href="/AwardsAndTestimonials" data-aos-delay="1200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Press, Awards & Testimonials</a>
        <a href="/Career" data-aos-delay="1400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Career</a>
  {/* <a href="/" onClick={(e) => handleLinkClick(e, '/')} data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Home</a>
        <a href="/AboutUs" onClick={(e) => handleLinkClick(e, '/AboutUs')} data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">About Us</a>
        <a href="/DesignAndBuild" onClick={(e) => handleLinkClick(e, '/DesignAndBuild')} data-aos-delay="400" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Design & build</a>
        <a href="/Manufacturing" onClick={(e) => handleLinkClick(e, '/Manufacturing')} data-aos-delay="600" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Manufacturing</a>
        <a href="/Projects" onClick={(e) => handleLinkClick(e, '/Projects')} data-aos-delay="800" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Projects</a>
        <a href="/FireDoors" onClick={(e) => handleLinkClick(e, '/FireDoors')} data-aos-delay="1000" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Fire Door</a>
        <a href="/AwardsAndTestimonials" onClick={(e) => handleLinkClick(e, '/AwardsAndTestimonials')} data-aos-delay="1200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Press, Awards & Testimonials</a>
        <a href="/Career" onClick={(e) => handleLinkClick(e, '/Career')} data-aos-delay="1400" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Career</a> */}

      </div>
    </div>

  );
};

export default LeftContainer;
