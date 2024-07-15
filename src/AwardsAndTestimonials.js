import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import award1Img from './images/awards/award-1.jpg'
import award2Img from './images/awards/award-2.jpg'
import award3Img from './images/awards/award-3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import testimonial1Img from './images/awards/testimonial-1.png'
import testimonial2Img from './images/awards/testimonial-2.png'
import testimonial3Img from './images/awards/testimonial-3.png'

import Footer from './components/Footer';
import SmoothScroll from "./SmoothScroll";
import LeftContainer from './components/LeftContainer';


function AwardsAndTestimonials() {

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
          <div className='container-fluid testimonials mt-5 pt-5'>
            <div className='row bg-wood  pb-0 justify-content-center main-container'>
              <div className='col-lg-12 col-11'>
                <h2 className='mb-5 title ' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Awards <a href='/Awards'> <small className='fs-small'>Go to next <i class="bi bi-arrow-right"></i></small></a> </h2>
                <div className='row justify-content-center'>
                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='press-card' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={award1Img} />
                      <div className='card-content'>
                        <h6 className='text-uppercase'> Ace Tech 2013</h6>
                        <p>Winner for Best Stall Design </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='press-card' data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={award2Img} />
                      <div className='card-content'>
                        <h6 className='text-uppercase'> Ace Tech 2012</h6>
                        <p>Winners – Best Design Wall </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='press-card' data-aos-delay="400" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={award3Img} />
                      <div className='card-content'>
                        <h6 className='text-uppercase'> Institute of Indian Interior Designers – 2011</h6>
                        <p>Felicitating the Women Achievers </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='row bg-wood  justify-content-center main-container'>
              <div className='col-lg-12 col-11 '>
                <h2 className='mt-5 mb-5 title' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Testimonials <a href='/Testimonials'> <small className='fs-small'>Go to next <i class="bi bi-arrow-right"></i></small></a> </h2>
                <div className='row justify-content-center'>
                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='press-card ' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                      <img className='centerimage' src={testimonial1Img} />
                      <div className='card-content'>
                        <h6 className='text-uppercase'> Certified by Reliance Project Management Group</h6>
                        <p>For achieving 'Safe contractor of the year - KAVACH 2019' </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='press-card' data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                      <img className='centerimage' src={testimonial2Img} />
                      <div className='card-content'>
                        <h6 className='text-uppercase'> CRISIL certification 2021</h6>
                        <p>CRISIL SME grading. </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='press-card' data-aos-delay="400" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                      <img className='centerimage' src={testimonial3Img} />
                      <div className='card-content'>
                        <h6 className='text-uppercase'> Certified by India book of records</h6>
                        <p>For conceptualizing & completion of largest cancer care hospital project in least time. </p>
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

export default AwardsAndTestimonials;
