import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import award1Img from './images/awards/award-1.jpg'
import award2Img from './images/awards/award-2.jpg'
import award3Img from './images/awards/award-3.jpg'
import award4Img from './images/awards/award-4.jpg'
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './components/Footer';
import SmoothScroll from "./SmoothScroll";
import LeftContainer from './components/LeftContainer';


function Awards() {

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
          <div className='container-fluid awards mt-5 pt-5'>
            <div className='row bg-wood  justify-content-center main-container'>
              <div className='col-lg-12 col-11 '>
                <h2 className='mb-5 title' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Awards</h2>
                <div className='row'>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card award-card' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={award1Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> Ace Tech <br></br> 2013</h6>
                        <p>Winner for Best Stall Design </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card award-card' data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={award2Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> Ace Tech <br></br> 2012</h6>
                        <p>Winners – Best Design Wall </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card award-card' data-aos-delay="400" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={award3Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> Institute of Indian Interior Designers 2011</h6>
                        <p>Felicitating the Women Achievers </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-6'>
                    <div className='press-card award-card' data-aos-delay="600" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">
                      <img src={award4Img} />
                      <div className='card-content '>
                        <h6 className='text-uppercase'> Kaushal Sarthi Award - NSDC Delhi</h6>
                        <p>At Bikaner Rojgar Mela for special work done by Narsi Group in skill India </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className='col-lg-4 col-md-6'>
                  <div className='press-card award-card'>
                    <img src={award4Img} />
                    <div className='card-content '>
                      <h6 className='text-uppercase'> Kaushal Sarthi Award - NSDC Delhi</h6>
                      <p>At Bikaner Rojgar Mela for special work done by Narsi Group in skill India </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                  <div className='press-card award-card'>
                    <img src={award4Img} />
                    <div className='card-content '>
                      <h6 className='text-uppercase'> Kaushal Sarthi Award - NSDC Delhi</h6>
                      <p>At Bikaner Rojgar Mela for special work done by Narsi Group in skill India </p>
                    </div>
                  </div>
                </div> */}
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

export default Awards;
