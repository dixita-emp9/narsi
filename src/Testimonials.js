import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import testimonial1Img from './images/awards/testimonial-1.png'
import testimonial2Img from './images/awards/testimonial-2.png'
import testimonial3Img from './images/awards/testimonial-3.png'
import testimonial4Img from './images/awards/testimonial-4.png'
import testimonial5Img from './images/awards/testimonial-5.png'
import testimonial6Img from './images/awards/testimonial-6.png'
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './components/Footer';
import SmoothScroll from "./SmoothScroll";
import LeftContainer from './components/LeftContainer';


function Testimonials() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can set various options here
    });
  }, []);

  return (
    <div>
      {/* <SmoothScroll /> */}
      <OverlayNav />
      <LeftContainer />
      <div className='smoothScroll-container' >
        <div className='margin-container'>
          <div className='container-fluid testimonials testimonials-det mt-5 pt-5'>
            <div className='row bg-wood  justify-content-center main-container'>
              <div className='col-lg-12 col-11 '>
                <h2 className='mb-5 title' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Testimonials</h2>
                <div className='row justify-content-center'>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={testimonial1Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> Certified by Reliance Project Management Group</h6>
                        <p>For achieving 'Safe contractor of the year - KAVACH 2019' </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card' data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={testimonial2Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> CRISIL certification 2021</h6>
                        <p>CRISIL SME grading. </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card' data-aos-delay="400" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={testimonial3Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> Certified by India book of records</h6>
                        <p>For conceptualizing & completion of largest cancer care hospital project in least time. </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card' data-aos-delay="600" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={testimonial4Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> Certificate of appreciation from GVK</h6>
                        <p>First & Business Class Lounges completion (2015) </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card' data-aos-delay="800" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={testimonial5Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'>Certificate of appreciation from WIPRO</h6>
                        <p>For 8 Million Safe Human Hours (2017 – 2020) </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card' data-aos-delay="1000" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={testimonial6Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> Certificate of appreciation from Tata Consultancy Services</h6>
                        <p>For 10 Million Safe Man Hours at TCS – Indor SEZ Project </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default Testimonials;
