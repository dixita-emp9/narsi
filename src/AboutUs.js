import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import aboutUsBanner from './images/aboutusbanner.jpg';
import aboutUsBanner2 from './images/aboutus-banner.jpg';
import nkdImg from './images/ndk.jpg';
import jkImg from './images/jk.jpg';
import azImg from './images/az.jpg'
import missionImg from './images/mission.jpg';
import visionImg from './images/vision.jpg';
import strategyImg from './images/Strategy.jpg';
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



function AboutUs() {

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
          <header className='aboutus'>
            <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
              <div>
                <img src={aboutUsBanner} />
                <div className='manufacturing-text-dsn'>
                  <h1 className='banner-heading'  data-aos="fade-up" data-aos-once="true">Designs that inspire you</h1>
                </div>
              </div>
            </Carousel>
          </header>
          <div className='container-fluid bg-wood'>
            <div className='row bg-wood section manuf-sec justify-content-center about-content-sec'>
              <div className='col-lg-12 col-sm-12'>
                <div className='row'>
                  <div className='col-lg-12 manuf-sec' >
                    <h2 data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="900" >About Us</h2>
                    <div className='manuf-facility d-flex flex-column'>
                      <p className='inter-font' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="900">At Narsi, we lead the industry with our innovative approach to crafting top-tier interiors. With a dedication to "Building Inspirational Spaces," we blend traditional craftsmanship with modern techniques to create unique and creative projects. </p>
                      <p className='mt-2 inter-font' data-aos-delay="400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="500">Wood is at the heart of our philosophy, chosen for its timeless beauty. We prioritise the well-being and growth of our employees, recognizing them as invaluable assets. With over  1400 completed projects, including notable clients like The New Parliament Building and Mastercard, our track record speaks for itself in delivering unparalleled value across various sectors.</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5 manuf-sec' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} >
                    <h2  data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true" data-aos-offset="900">Who We Are</h2>

                  </div>
                  <div className='col-lg-7 manuf-sec d-flex flex-column'>
                    <h2 className='text-upper' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="500">Design. Develop. Deliver.</h2>
                    <p className='inter-font' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="500">We’re a design oriented, one-stop interior turnkey solutions
                      provider. A strong team of innovators and passionate individuals,
                      who are tech driven. We use state of the art manufacturing
                      technology, which makes us Industry 4.0 ready. Design & Build,
                      Manufacturing and Projects are our pillars</p>

                    <p className='inter-font'>Excellence in customer service and care with emphasis on
                      consistently understanding and meeting every special need of our
                      customers, are our hallmarks.</p>
                  </div>
                </div>
              </div>

            </div>

            <header className='aboutus'>
              <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
                <div data-aos-delay="0" data-aos-duration=" 1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="500">
                  <img src={aboutUsBanner2} />
                </div>
              </Carousel>
            </header>
          </div>
          <div className='container-fluid '>
            <div className='row  section manuf-sec vision-dsn'>
              <div className='rect-container  row'>
                <div className='col-lg-9 col-12'>
                  <h4 className='mt-4' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="1100">Our Vision</h4>
                  <p className='inter-font' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="1100">To be a one-stop interior fitout service provider with a global reach with special emphasis on rigorours innovation to deliver premium quality at the best price and to be strong advocates of the 'Make in India' movement.</p>
                </div>
                <div className='col-lg-3 col-12  p-0' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true" data-aos-offset="1100">
                  <img src={visionImg} />
                </div>
              </div>
              <div className='rect-container row'>
                <div className='col-lg-9 col-12 '>
                  <h4 className='mt-4' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="1100">Our Mission</h4>
                  <p className='inter-font' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="1100">Our mission statement embodies everything we stand for. The way we do our
                    business, our work culture, our passion for quality, our obsession with innovative
                    technologies, our commitment to our human resources and above all, our
                    dedication to provide customer delight and satisfaction, are all powered by our
                    singular focus on adding value through excellence.</p>
                </div>
                <div className='col-lg-3 col-12  p-0' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="1100">
                  <img src={visionImg} />
                </div>
              </div>
              <div className='rect-container  row'>
                <div className='col-lg-9 col-12'>
                  <h4 className='mt-4' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="1100">Our Strategy</h4>
                  <p className='inter-font' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="1100">Using innovative methods and latest technology by investing in research and
                    development.</p>
                </div>
                <div className='col-lg-3 col-12 p-0' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="1100">
                  <img src={strategyImg} />
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid '>
            <div className='row section manuf-sec justify-content-center'>
              <div className='col-lg-12 col-sm-12'>
                <div className='row'>
                  <div className='col-lg-12' >
                    <h2 data-aos-delay="1300" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="500">Our Leadership</h2>
                    {/* <div className='manuf-facility d-flex flex-column'>
                      <p>At Narsi, we lead the industry with our innovative approach to crafting top-tier interiors. With a dedication to "Building Inspirational Spaces," we blend traditional craftsmanship with modern techniques to create unique and creative projects. </p>
                      <p className='mt-2'>Wood is at the heart of our philosophy, chosen for its timeless beauty. We prioritise the well-being and growth of our employees, recognizing them as invaluable assets. With over  1400 completed projects, including notable clients like The New Parliament Building and Mastercard, our track record speaks for itself in delivering unparalleled value across various sectors.</p>
                    </div> */}
                  </div>
                </div>
                <div className='row manuf-sec leadership'>
                  <div className='col-lg-4 col-12' data-aos-delay="100" data-aos-duration=" 1400"  data-aos="fade-up" data-aos-once="true" data-aos-offset="1900">
                    <img className='rounded-corner-16 bordered' src={nkdImg} />
                    <h5 className='text-upper team-title'>Narsi D. Kularia</h5>
                    <p className='text-upper team-occu'>Managing Director</p>
                  </div>
                  <div className='col-lg-4 col-12' data-aos-delay="400" data-aos-duration=" 1400"  data-aos="fade-up" data-aos-once="true" data-aos-offset="1900">
                    <img className='rounded-corner-16 bordered' src={jkImg} />
                    <h5 className='text-upper team-title'>Jagdish Kularia</h5>
                    <p className='text-upper team-occu'>Director</p>
                  </div>
                  <div className='col-lg-4 col-12' data-aos-delay="700" data-aos-duration=" 1400"  data-aos="fade-up" data-aos-once="true" data-aos-offset="1900">
                    <img className='rounded-corner-16 bordered' src={azImg} />
                    <h5 className='text-upper team-title'>Aathis Zavar</h5>
                    <p className='text-upper team-occu'>CEO</p>
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

export default AboutUs;
