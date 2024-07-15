import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import homebanner from './images/home.jpg'
import corporateImg from './images/corporate.png'
import educationImg from './images/educational.png'
import hospitalImg from './images/hospital.svg'
import industrialImg from './images/industrial.png'
import civilImg from './images/civil.png'
import residentailImg from './images/residential.png'
import commercialImg from './images/commercial.png'
import healthcareImg from './images/healthcare.png'
import bankImg from './images/bank.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

import corporateImgHov from './images/corporate-hover.jpg'
import educationImgHov from './images/educational-hover.jpg'
import hospitalImgHov from './images/hospital.svg'
import industrialImgHov from './images/industrial-hover.jpg'
import civilImgHov from './images/civic-hover.jpg'
import residentailImgHov from './images/residential-hover.jpg'
import govtImgHov from './images/commercial-hover.jpg'
import healthcareImgHov from './images/healthcare-hover.jpg'
import bankImgHov from './images/bank-hover.jpg'

import Marquee from "react-fast-marquee";
import Footer from './components/Footer';
import { InstagramEmbed } from 'react-social-media-embed';

import press1Img from './images/press1.jpg'
import press2Img from './images/press2.jpg'
import press3Img from './images/press3.jpg'
import press4Img from './images/press4.jpg'
import press5Img from './images/press5.jpg'
import press6Img from './images/press6.jpg'
import SmoothScroll from "./SmoothScroll";
import SmoothHScroll from './SmoothHScroll';
import homeVideo from './videos/parliament.mp4'
import itpoVideo from './videos/itpo.mp4'
import JSWVideo from './videos/JSW.mp4'
import G20Video from './videos/G-20Room.mp4'

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel'
//import ReactPlayer from 'react-player'
import ReactPlayer from 'react-player/lazy'
import LeftContainer from './components/LeftContainer';
import InstaFeeds from './InstaFeeds';
// import 'animate.css';

import projImg from './images/project-image.jpg'

function importAll(r) {
  let images = {};
  r.keys().forEach(key => images[key] = r(key));
  return images;
}

const clientImages = importAll(require.context('./images/clients', false, /\.(png|jpe?g|svg)$/));

const CountUpAnimation = ({
  timeout,
  initialValue,
  targetValue,
  prefix,
}) => {
  const [count, setCount] = useState(initialValue);
  const duration = timeout;

  useEffect(() => {
    
    AOS.init({
      duration: 1000, // You can adjust this duration as needed
    });
    let startValue = initialValue;
    const interval = Math.floor(
      duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return (
    <div className="container">
      <h2 className="num num-dsn">{count}{prefix}</h2>
    </div>
  );
};


function Home() {
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
      <div className='smoothScroll-container'  >
        <div className='margin-container' >
          <div className="player-container player-custom-dsn">
            {!videoLoaded && (
              <div>
                <OverlayNav />
                <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}  >
                  <div>
                    <img src={homebanner} />
                  </div>
                </Carousel>
              </div>
            )}
               <Carousel   className=''>
              <Carousel.Item>
                 <ReactPlayer
              url={homeVideo}
              fallback={
                <div>
                  <OverlayNav />
                  <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}  >
                    <div>
                      <img src={homebanner} />
                    </div>
                  </Carousel>
                </div>
              }
              muted={true}
              loop={true}
              playing={true}
              onReady={() => setVideoLoaded(true)}
              style={{ display: videoLoaded ? 'block' : 'none' }}
            />
                  <Carousel.Caption>
              <h4 id="banner-title-faded" className='text-uppercase text-white '>New Parliament</h4>
              <p>New Delhi</p>
            </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <ReactPlayer
              url={itpoVideo}
              fallback={
                <div>
                  <OverlayNav />
                  <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}  >
                    <div>
                      <img src={homebanner} />
                    </div>
                    
                  </Carousel>
                </div>
              }
              muted={true}
              loop={true}
              playing={true}
              onReady={() => setVideoLoaded(true)}
              style={{ display: videoLoaded ? 'block' : 'none' }}
            /> <Carousel.Caption>
                  <h4 id="banner-title-faded" className='text-uppercase text-white '>ITPO</h4>
              <p>New Delhi</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <ReactPlayer
              url={G20Video}
              fallback={
                <div>
                  <OverlayNav />
                  <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}  >
                    <div>
                      <img src={homebanner} />
                    </div>
                  </Carousel>
                </div>
              }
              muted={true}
              loop={true}
              playing={true}
              onReady={() => setVideoLoaded(true)}
              style={{ display: videoLoaded ? 'block' : 'none' }}
            />
               <Carousel.Caption>
                  <h4 id="banner-title-faded" className='text-uppercase text-white '>G-20</h4>
              <p>New Delhi</p>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/* <ReactPlayer
              url={homeVideo}
              fallback={
                <div>
                  <OverlayNav />
                  <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
                    <div>
                      <img src={homebanner} />
                    </div>
                  </Carousel>
                </div>
              }
              // playbackRate={0.7}
              muted={true}
              loop={true}
              playing={true}
              onReady={() => setVideoLoaded(true)}
              style={{ display: videoLoaded ? 'block' : 'none' }}
            /> */}
          </div>

          <div className='container-fluid'>
            <div className='row justify-content-center section bg-wood'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-lg-6 ' style={{ textAlign: 'justify' }}>
                    <h1 className="custom-heading about-dsn" data-aos="fade-up" data-aos-once="true">About Us</h1>
                    <div className='bd-r'>
                      <p data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true"> At Narsi, we lead the industry with our innovative approach to crafting top-tier interiors. With a dedication to "Building Inspirational Spaces," we blend traditional craftsmanship with modern techniques to create unique and creative projects.</p>
                      <p className='mg-0' data-aos-delay="400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Wood is at the heart of our philosophy, chosen for its timeless beauty. We prioritise the well-being and growth of our employees, recognizing them as invaluable assets. With over  1400 completed projects, including notable clients like The New Parliament Building and Mastercard, our track record speaks for itself in delivering unparalleled value across various sectors.</p>

                    </div>
                  </div>
                  <div className='col-lg-6  d-flex align-items-center usps'>
                    <div className='row text-center'>
                      <div className='col-6'>
                        <CountUpAnimation
                          timeout={800}
                          initialValue={140}
                          targetValue={ 700}
                          prefix={"+"}
                        />
                        <span>Project done over 3+ decades</span>
                      </div>
                      <div className='col-6'>
                        <CountUpAnimation
                          timeout={2000}
                          initialValue={0}
                          targetValue={99}
                          prefix={"m+"}
                        />
                        <span>Sq.ft. of Civil & Interiors</span>
                      </div>
                      <div className='col-6 mt-5'>
                        <CountUpAnimation
                          timeout={1000}
                          initialValue={0}
                          targetValue={23}
                          prefix={"m+"}
                        />
                        <span>Sq.ft. of General Contracting</span>
                      </div>
                      <div className='col-6 mt-5'>
                        <CountUpAnimation
                          timeout={1500}
                          initialValue={0}
                          targetValue={6}
                          prefix={"m+"}
                        />
                        <span>Sq.ft. of Design & Build</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='row justify-content-center section'>
              <div className='col-12'>
                <h1 className='mt-5 mb-5 project-title-dsn' data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Project</h1>
                <div className=''>
                  <div className='row'>
                    <div className='col-12 project-col-dsn'>
                    <div className='col-md-3 col-4 project-div-dsn'>
                      <a href='/Projectsbycategory/commercial'>
                      <div className='project-img' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                        <img className='img' src={corporateImg} />
                        <img className='hoveredImg' src={corporateImgHov} />
                        <span >Corporate Interior</span>
                      </div>
                      </a>
                    </div>
                    <div className='col-md-3 col-4 project-div-dsn'>
                    <a href='/Projectsbycategory/education'>
                      <div className='project-img ' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                        <img className='img' src={educationImg} />
                        <img className='hoveredImg' src={educationImgHov} />
                        <span >Education Institute </span>
                      </div>
                      </a>
                    </div>
                    <div className='col-md-3 col-4 project-div-dsn'>
                    <a href='/Projectsbycategory/civil'>
                      <div className='project-img' data-aos-delay="400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true"> 
                        <img  className='img'src={civilImg} />
                        <img className='hoveredImg' src={civilImgHov} />
                        <span >Civic Interior</span>
                      </div>
                      </a>
                    </div>
                    <div className='col-md-3 col-4 project-div-dsn'>
                    <a href='/Projectsbycategory/industrial'>
                      <div className='project-img ' data-aos-delay="600" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                        <img className='img' src={industrialImg} />
                        <img className='hoveredImg' src={industrialImgHov} />
                        <span >Industrial Interior</span>
                      </div>
                      </a>
                    </div>


                    </div>
                    <div className='col-12 project-col-dsn'>
                    <div className='col-md-3 col-4 project-div-dsn'>
                    <a href='/Projectsbycategory/residential'>
                      <div className='project-img' data-aos-delay="800" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                        <img className='img' src={residentailImg} />
                        <img className='hoveredImg' src={residentailImgHov} />
                        <span >Residential Interior</span>
                      </div>
                      </a>
                    </div>
                    <div className='col-md-3 col-4 project-div-dsn'>
                    <a href='/Projectsbycategory/government'>
                      <div className='project-img' data-aos-delay="1000" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                        <img  className='img' src={commercialImg} />
                        <img className='hoveredImg' src={govtImgHov} />
                        <span >Government Interior</span>
                      </div>
                      </a>
                    </div>
                    <div className='col-md-3 col-4 project-div-dsn'>
                    <a href='/Projectsbycategory/hospital'>
                      <div className='project-img' data-aos-delay="1200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                        <img className='img' src={healthcareImg} />
                        <img className='hoveredImg' src={healthcareImgHov} />
                        <span >Healtcare Interior</span>
                      </div>
                      </a>
                    </div>
                    <div className='col-md-3 col-4 project-div-dsn'>
                    <a href='/Projectsbycategory/bank' data-aos-delay="1400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                      <div className='project-img '>
                        <img className='img' src={bankImg} />
                        <img className='hoveredImg' src={bankImgHov} />
                        <span >Bank Interior</span>
                      </div>
                      </a>
                    </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div className='row  justify-content-center section'>
              <div className='col-12 position-relative'>
                <h1 className='mt-5 mb-5 pb-4 clients-title-dsn' data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Clients</h1>
                <Marquee speed={100} autoFill={true} className="marquee-container" data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                  <div className='d-flex justify-content-around'>
                    {Object.entries(clientImages).slice(0, Math.ceil(Object.keys(clientImages).length / 2)).map(([key, value]) => (
                      <div key={key} className='client-logo'>
                        <img src={value} alt={key} />
                      </div>
                    ))}
                  </div>

                </Marquee>
                <Marquee speed={100} direction={"right"} autoFill={true} className="marquee-container mt-4" data-aos-delay="400" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">

                  <div className='d-flex justify-content-around'>
                    {Object.entries(clientImages).slice(Math.ceil(Object.keys(clientImages).length / 2), Math.ceil(2 * Object.keys(clientImages).length / 2)).map(([key, value]) => (
                      <div key={key} className='client-logo'>
                        <img src={value} alt={key} />
                      </div>
                    ))}
                  </div>

                </Marquee>

              </div>
            </div>

            <div className='row justify-content-center section instafeed-section'>
              <div className='col-12'>
                <div className='d-flex align-items-center insta-titles'>
                  <div className="main-follow-dsn"><h2 className='mt-5 mb-5 follow-font-dsn' data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Follow us on</h2></div>
                  <div className="insta-id-dsn"><h5 className='mt-5 mb-5' data-aos="fade-up" data-aos-once="true" data-aos-offset="300">@narsi.in</h5></div>
                </div>
              

                <SmoothHScroll>
                  <div className='d-flex' >
                  <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
                    {/* <div className='post-container'>
                      <InstagramEmbed captioned={false} url="https://www.instagram.com/p/C5TWKf_rLLy" width={328} height={450} />
                    </div>
                    <div className='post-container'>
                      <InstagramEmbed captioned={false} url="https://www.instagram.com/p/C2_niNYMis5/" width={328} height={450} />
                    </div>
                    <div className='post-container'>
                      <InstagramEmbed captioned={false} url="https://www.instagram.com/p/C4IA_HlLN-L/" width={328} height={450} />
                    </div> */}
                  </div>
                </SmoothHScroll>
              </div>
            </div>

            <div className='row justify-content-center section '>
              <div className='col-12'>
                <h2 className='mt-5 mb-5 press-title-dsn' data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Press</h2>

                <div className='d-flex flex-row ' style={{ overflowX: "scroll" }} data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">
                  <div className='col-md-4 col-4 press-card-dsn'>
                    <div className='press-card2'>
                      <img src={press1Img} />
                      <div className='card-content'>
                        <p>Developed by Narsi Group who claimed it to be world’s biggest wooden door, it has successfully cleared the fire resistance test conducted by the fire research laboratory of... </p>
                        <a> <h6 className='text-uppercase'> Read more</h6></a>
                      </div>

                    </div>
                  </div>
                  <div className='col-md-4 col-4 press-card-dsn'>
                    <div className='press-card2'>
                      <img src={press2Img} />
                      <div className='card-content'>
                        <p>Established in 1986 by the prominent Narsi Kularia, Founder, Narsi Group, the company has successfully executed a variety of projects for highly discerning clientele like... </p>
                        <a> <h6 className='text-uppercase'> Read more</h6></a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 col-4 press-card-dsn'>
                    <div className='press-card2'>
                      <img src={press3Img} />
                      <div className='card-content'>
                        <p>Narsi Kularia, founder of the Narsi Group, a one-stop, Pan-India interior turnkey fit-out service provider, established the company in 1986... </p>
                        <a> <h6 className='text-uppercase'> Read more</h6></a>
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

export default Home;
