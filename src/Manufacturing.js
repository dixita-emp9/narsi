import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import manufacturingBanner from './images/Manufacturing.jpg'
import industryIcon from './images/industry.svg'
import dataIcon from './images/data.svg'
import safetyIcon from './images/safety.svg'
import outpuIcon from './images/output.svg'
import innovIcon from './images/innovation.svg'
import dustIcon from './images/dust.svg'
import dataDrivenIcon from './images/data-driven.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Marquee from "react-fast-marquee";
import Footer from './components/Footer';
import SmoothScroll from "./SmoothScroll";
import LeftContainer from './components/LeftContainer';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
function importAll(r) {
  let images = {};
  r.keys().forEach(key => images[key] = r(key));
  return images;
}

const clientImages = importAll(require.context('./images/clients', false, /\.(png|jpe?g|svg)$/));


function Manufacturing() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can set various options here
    });
  }, []);

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
          <header className='manufacturing'>
            <Carousel  showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
              <div>
                <img src={manufacturingBanner} />
                <div className='manufacturing-text-dsn'>
                  <h1 className='manufacturing-heading' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Manufacturing</h1>
                  <p className='manufacturing-subheading inter-font' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Where experience meets Innovation, our state-of-the-art manufacturing facility leverages decades of expertise to deliver unmatched quality and efficiency.</p>
                </div>
              </div>
            </Carousel>
          </header>
          <div className='container-fluid bg-wood'>
            <div className='row bg-wood section manu-sec-dsn justify-content-center'>
              <div className='col-lg-12 col-sm-12'>
                <div className='row'>
                  <div className='col-lg-6 manu-sec-dsn' style={{ borderRight: '1px solid #bbbbbb' }} >
                    <h2 data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Key features of our manufacturing facility</h2>
                    <div className='manuf-facility d-flex flex-column mt-5'>
                      <div className='d-flex justify-content-between' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                        <div className='col-2'>
                          <img className='manuf-icon' src={industryIcon} />
                        </div>
                        <div className='col-9'>
                          <h5 className='text-uppercase'>Industry 4.0 Ready</h5>
                          <p className='inter-font'>Automation of manufacturing and industrial practices using the state of the art technology.</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-between' data-aos-delay="400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                        <div className='col-2'>
                          <img className='manuf-icon' src={dataIcon} />
                        </div>
                        <div className='col-9'>
                          <h5 className='text-uppercase'>Data driven</h5>
                          <p className='inter-font'>Realtime accumulation and analysis of data.</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-between' data-aos-delay="600" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                        <div className='col-2'>
                          <img className='manuf-icon' src={safetyIcon} />
                        </div>
                        <div className='col-9'>
                          <h5 className='text-uppercase'>Safety Assurance</h5>
                          <p className='inter-font'>All machines in our facilities are CE certified.</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-between' data-aos-delay="800" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                        <div className='col-2'>
                          <img className='manuf-icon' src={outpuIcon} />
                        </div>
                        <div className='col-9'>
                          <h5 className='text-uppercase'>Maximum output</h5>
                          <p className='inter-font'>Processing capacity of 50,000+ sq.ft of boards in a day.</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-between' data-aos-delay="1000" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                        <div className='col-2'>
                          <img className='manuf-icon' src={innovIcon} />
                        </div>
                        <div className='col-9'>
                          <h5 className='text-uppercase'>Innovation</h5>
                          <p className='inter-font'>Dedicated R & D facility for innovative engineering methods and techniques.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 manu-sec-dsn d-flex flex-column' >
                    <h2 data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Sustainability</h2>
                    <p className='inter-font' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">with an increase amount of attention on the enviornmental impact of every industry, we have adpoted effective sustainable methods : </p>
                    <div className='manuf-facility d-flex flex-column mt-5'>
                      <div className='d-flex justify-content-between' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                        <div className='col-2'>
                          <img className='manuf-icon' src={dustIcon} />
                        </div>
                        <div className='col-9'>
                          <h5 className='text-uppercase'>Industry 4.0 Ready</h5>
                          <p className='inter-font'>Automation of manufacturing and industrial practices using the state of the art technology.</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-between' data-aos-delay="400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                        <div className='col-2'>
                          <img className='manuf-icon' src={dataDrivenIcon} />
                        </div>
                        <div className='col-9'>
                          <h5 className='text-uppercase'>Data driven</h5>
                          <p className='inter-font'>Realtime accumulation and analysis of data.</p>
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

export default Manufacturing;
