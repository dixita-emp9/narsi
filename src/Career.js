import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import award1Img from './images/awards/award-1.jpg'
import award2Img from './images/awards/award-2.jpg'
import award3Img from './images/awards/award-3.jpg'
import award4Img from './images/awards/award-4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import Footer from './components/Footer';
import SmoothScroll from "./SmoothScroll";
import LeftContainer from './components/LeftContainer';

function Career() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can set various options here
    });
  }, []);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isOpen,setIsOpen] = useState(false)
  const setNav =(menu)=>{
    setIsOpen(menu)
  }
  return (
    <div className={`body ${isOpen ? 'open' : ''}`}>
      {/* <SmoothScroll /> */}
      <OverlayNav setNav={(e)=>setNav(e)} />
      <LeftContainer />
      <div className='smoothScroll-container' >
        <div className='margin-container'>

        <div className='container-fluid'>
          <div className='row career section bg-wood justify-content-center'>
            <div className='col-lg-10 col-12'>
              <h1 className='mt-5  text-uppercase oppor-title' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Find Opportunities</h1>
              <p className='mb-5' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Send us your C.V., we'll get back to you within 2 working days.</p>
              <div className='row d-flex '>
                <div className='col-lg-8 col-md-8 col-12 main-div-form'>
                  <div className='press-card form-dsn'>
                    <div className='card-content h-auto'>
                      <h4 className='mb-4' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Send message</h4>
                      <div class="form-main">
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="name" placeholder="" />
                          <label for="floatingInput">Your name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="email" placeholder="" />
                          <label for="floatingPassword">Your e-mail</label>
                        </div>
                        <div class="mb-3">
                          <input type="file" class="form-control" id="cv" placeholder="" />
                        </div>
                        <div class="form-floating mb-3">
                          <textarea class="form-control" placeholder="" id="message"></textarea>
                          <label for="floatingPassword">Your message</label>
                        </div>
                        <div class="d-grid gap-2 col-12s mx-auto">
                          <button class="btn btn-primary" type="button">Send message</button>
                        </div>
                      </div>
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

export default Career;
