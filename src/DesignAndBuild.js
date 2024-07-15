import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import designBuildBanner from './images/designbuild-banner.jpg'
import designImg from './images/design.jpg'
import developImg from './images/develop.jpg'
import deliverImg from './images/deliver.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import educationImg from './images/educational.svg'
import hospitalImg from './images/hospital.svg'
import industrialImg from './images/industrial.svg'
import civilImg from './images/civil.svg'
import residentailImg from './images/residential.svg'
import commercialImg from './images/commercial.svg'
import healthcareImg from './images/healthcare.svg'
import bankImg from './images/bank.svg'
import Marquee from "react-fast-marquee";
import Footer from './components/Footer';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import SmoothScroll from "./SmoothScroll";
import LeftContainer from './components/LeftContainer';
import MobileMenu from './components/MobileMenu';

function DesignAndBuild() {

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
          <header  >
            <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
              <div>
                <img src={designBuildBanner} />
                <div className='banner-text-dsn'>
                  <h1 className='banner-heading designbuild-title' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true">Design & Build</h1>
                  <p className='banner-subheading inter-font' style={{ marginTop: "9vmin" }} data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true">Our core competency lies in being a single point of contact for both design and build phase of a project. We focus on seamless communication and high-level productivity between teams to deliver results.</p>
                </div>
              </div>
            </Carousel>
          </header>

          <div className='container-fluid bg-wood '>
            <div className='row bg-orange bg-wood  section pb-5 text-center'>
              <div className='p-3 mb-3 wood-para-dsn' >
                <p className='inter-font' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Skills processed by our team to effectively build multi-phase projects</p>
              </div>
              <div className='row text-center'>
                <div className='col-lg-4'>
                  <h5 className='text-uppercase wood-three-text' data-aos-delay="0" data-aos-duration=" 1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">Excellent Management Skills</h5>
                </div>
                <div className='col-lg-4'>
                  <h5 className='text-uppercase wood-three-text' data-aos-delay="0" data-aos-duration=" 1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">High Technical knowledge</h5>
                </div>
                <div className='col-lg-4'>
                  <h5 className='text-uppercase wood-three-text' data-aos-delay="0" data-aos-duration=" 1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">Key decision-making</h5>
                </div>
              </div>
            </div>
            <div className='row justify-content-center section'>
              <div className='col-lg-12 col-12'>
                <h2 className='mt-4 mb-4 procees-dsn' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Our process</h2>
                <div className="row row-cols-1 px-2">
                  <div className="col-md-7 col-4 process-img">
                    <img className="rounded-corner right-image" src={designImg} />
                  </div>
                  {/* style={{ display: "flex", alignItems: "center", justifyContent: "end", marginLeft: "28px" }} */}
                  
                  <div className="col-md-5 col-4 d-flex flex-column cardspace text-justify right-dsn">
                  <h3 className='right-text-dsn'>Design</h3>
                    <p className="card-text inter-font" data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="300">The first and the most important step includes indentifying key requirements of the client. This includes a detailed research on the relevant design,which then leads to sourcing the right materials. This serves as the foundation of any project.</p>
                  </div>
                </div>
                <div className='left-section-dsn'>
                <div className="row row-cols-1 px-2">
                  <div className="col-md-5 col-4 d-flex cardspace text-justify left-dsn">
                      <p className="card-text inter-font" data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true" data-aos-offset="300">The second step focuses on the technical and finer aspects of the process. It starts with the developing of technical drawings, which acts as the backbone of the project. The drawings are brought to life by the state of the art, high-tech manufacturing technology.</p>
                                  
                      <h3 className='left-text-dsn' >Develop</h3>
                  </div>
                  <div className="col-md-7 col-4 process-img">
                      <img className="rounded-corner left-image" src={developImg} />
                  </div>
                </div>
                </div>
                <div className='left-sec-dsn-mobile'>
                  <div className="row row-cols-1  mt-5">

                  
                    <div className="col-12 col-lg-5 col-md-8 ">
                      <img className="rounded-corner" src={developImg} />
                    </div>
                    <div className="col col-lg-7 col-md-12 mt-3  d-flex  flex-column cardspace text-justify">
                    <h3  style={{ fontSize: "2.3rem", fontWeight:"400", textTransform:"uppercase" }} >Develop</h3>
                      <p className="card-text mobile-card" data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true" data-aos-offset="300">The second step focuses on the technical and finer aspects of the process. It starts with the developing of technical drawings, which acts as the backbone of the project. The drawings are brought to life by the state of the art, high-tech manufacturing technology.</p>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1 px-2">
                  <div className="col-md-7 col-4 process-img">
                    <img className="rounded-corner right-image" src={deliverImg} />
                  </div>
                  {/* style={{ display: "flex", alignItems: "center", justifyContent: "end", marginLeft: "34px" }} */}
                 
                  <div className="col-md-5 col-4 d-flex flex-column cardspace text-justify right-dsn">
                  <h3  className='right-text-dsn'>Deliver</h3>
                    <p className="card-text inter-font" data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="300">The final step includes efficient on-site execution, giving special attention to quality control. The completed projects is then handed over to the client in a timely manner.</p>
                  </div>
                </div>



              </div>
            </div>

            
          </div>
        </div>
        <Footer />
      </div> </div>

  );
}

export default DesignAndBuild;
