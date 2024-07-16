import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import firedoorImg from './images/Firedoor.png'
import fireImg from './images/fire.png'
import manImg from './images/man.png'
import arrowImg from './images/arrow-into.png'
import fighterImg from './images/firefighter.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import extinguisherImg from './images/extinguisher.png'
import plusImg from './images/plus.png'
import fpdImg from './images/FPD.png'
import Door60minImg from './images/60min.jpg'
import Door90min1Img from './images/90min-1.jpg'
import Door90min2Img from './images/90min-2.jpg'
import Door120min1Img from './images/120min-1.jpg'
import Door120min2Img from './images/120min-2.jpg'
import Door120mindImg from './images/120min-d.jpg'
import Footer from './components/Footer';
import SmoothScroll from "./SmoothScroll";
import LeftContainer from './components/LeftContainer';



function FireDoors() {

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
      <div className='smoothScroll-container'  >
        <div className='margin-container' >
          <div className='container-fluid'>
            <div className='row justify-content-center section bg-wood'>
              <div className='col-12'>
                <h1 className='firedoor-heading' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">Wooden Fire Door</h1>

              </div>
              <div className='col-12'>

                <div className='row'>

                  <div className='col-lg-6  d-flex justify-content-center align-items-center usps d-md-none d-xl-none d-xxl-none'>
                    <img className='img' style={{ width: "75%", marginBottom: "40px" }} src={firedoorImg} />
                  </div>

                  <div className='col-lg-6 ' style={{ textAlign: 'justify' }}>
                    <h1 className="custom-heading" data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">About </h1>
                    <div className='pr-3'>
                      <p className='inter-font' data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true">For decades, Narsi has crafted innovative interiors, prioritizing fire safety. We're pioneers in manufacturing and testing high-performance wooden fire doors. Our doors use advanced materials like PROMAT® for superior fire resistance, exceeding safety standards. Our skilled team ensures your project meets all fire safety regulations (NBC & local). Choose from 30-, 60-, 90-, or 120-minute fire-rated doors for optimal building protection.</p>
                      {/* <p className='mg-0'>Our highly specialized team provides regular technical support, the necessity of these doors is governed by NBC (National Building Code) as well as directives of local Fire Fighting and Municipal authorities.</p>
                      <p className='mg-0'>The Fire Doors are generally certified for 30minutes, 60 minutes, 90 minutes and 120 minutes fire rating for Insulation, Integrity and Stability.</p> */}
                    </div>
                  </div>
                  <div className='col-lg-6  d-flex justify-content-center align-items-center usps d-none d-md-block d-xl-block  d-xxl-block'>
                    <img className='img' style={{ width: "75%", alignSelf: "center" }} src={firedoorImg} />
                  </div>
                </div>
              </div>
            </div>

            <div className='row justify-content-center section'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-12  d-flex text-center justify-content-center align-items-center '>
                    <div className='d-xl-block d-xxl-none fire-door-title'>
                      <h1 className='mb-5' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Why are  Fire Doors Important?</h1>
                    </div>
                  </div>
                  <div className='col-lg-7 col-12 fire-impo-dsn'>
                    <div className='row'>
                      <div className='col-6'>
                        <div className='p-3' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                          <img className='fire-img' src={fireImg} />
                          <p className='mt-2 inter-font'>One of the most important fire safety products on your premises.</p>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='p-3' data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                          <img className='fire-img' src={manImg} />
                          <p className='mt-2 inter-font'>Gives occupants longer time to escape.</p>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='p-3' data-aos-delay="400" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                          <img className='fire-img' src={arrowImg} />
                          <p className='mt-2 inter-font'>Prevents the fire or smoke from spreading across the building and keeps the fire
                            contained to a particular compartment or
                            room.</p>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='p-3' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                          <img className='fire-img' src={fighterImg} />
                          <p className='mt-2 inter-font'>Gives the fire service more time to rescue anyone who is trapped and put out the
                            fire.</p>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='p-3' data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                          <img className='fire-img' src={extinguisherImg} />
                          <p className='mt-2 inter-font'>Part of a building’s passive fire protection system, an essential requirement for
                            public buildings, offices, and factories.</p>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='p-3' data-aos-delay="600" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                          <img className='fire-img' src={plusImg} />
                          <p className='mt-2 inter-font'>Protects lives and offers protection to the remainder of the building.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-5  d-flex justify-content-center align-items-center '>
                    <div className='d-none d-xl-block  d-xxl-block'>
                      <div className='bd-l fire-door-title'>
                        <h1 data-aos-delay="0" data-aos-duration="1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="300">Why are <br></br> Fire Doors <br></br> Important?</h1>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row justify-content-center section bg-wood '>
              <div className='col-12'>
                <div className='d-flex  justify-content-between align-items-center'>
                  <div className='col-6 col-lg-7'>
                    <h2 className='mt-5 mb-5 custom-fire' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Fire Doors</h2>
                  </div>
                  <div className='col-1 col-lg-2 d-none d-xl-block  d-xxl-block'>
                    <img style={{ width: "110px",  }} src={fpdImg} />
                  </div>
                  <div className='col-3 col-lg-3 d-none d-xl-block  d-xxl-block'>
                    <div className='fd-btn'>
                      <a href='https://fireprodoors.com/' target='_blank'>More on, FireProDoors.com</a> </div>
                  </div>
                 
                </div>

                <div className='d-flex flex-row ' style={{ overflowX: "scroll", marginBottom: '60px' }}>
                  <div className='col-12 col-md-11 col-lg-10'>
                    <div className='firedoor-card'>

                      <div className='card-content'>
                        <div className='row'>
                          <div className='col-12 col-xl-4'>
                            <img src={Door60minImg} />
                          </div>
                          <div className='col-12  col-xl-8 doors'>
                            <div className='doors-first'>
                              <h2 className='door-name'>60 Minutes Door </h2>
                              <ul className='door-spec' >
                                <li> <strong>Door Size</strong> : 2400x1200 mm </li>
                                <li> <strong>Frame Size</strong> : 100x60 mm </li>
                                <li> <strong>Shutter Thickness</strong> : 45 mm </li>
                                <li> <strong>6MM Thick</strong> :  PROMINA® 60 </li>
                                <li> <strong>Certification</strong> : IPRITI </li>
                              </ul>
                            </div>
                            <div className='doors-second'>
                              <h6>Material Testing Standars</h6>
                              <p>BS 476 Part 22: 1987, IS 3614 Part 2</p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  
                  <div className='col-12 col-md-11 col-lg-10'>
                    <div className='firedoor-card'>

                      <div className='card-content'>
                        <div className='row'>
                          <div className='col-12 col-xl-4'>
                            <img src={Door90min1Img} />
                          </div>
                          <div className='col-12  col-xl-8 doors'>
                            <div className='doors-first'>
                              <h2 className='door-name'>90 Minutes Door 1</h2>
                              <ul className='door-spec' >
                                <li> <strong>Door Size</strong> : 2250x1050 mm </li>
                                <li> <strong>Frame Size</strong> : 150x75 mm </li>
                                <li> <strong>Shutter Thickness</strong> : 55 mm </li>
                                <li> <strong>9MM Thick</strong> : PROMATECT®  </li>
                                <li> <strong>Certification</strong> : IPRITI </li>
                              </ul>
                            </div>
                            <div className='doors-second'>
                              <h6>Material Testing Standars</h6>
                              <p>BS 476 Part 22: 1987, IS 3614 Part 2</p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className='col-12 col-md-11 col-lg-10'>
                    <div className='firedoor-card'>

                      <div className='card-content'>
                        <div className='row'>
                          <div className='col-12 col-xl-4'>
                            <img src={Door90min2Img} />
                          </div>
                          <div className='col-12  col-xl-8 doors'>
                            <div className='doors-first'>
                              <h2 className='door-name'>90 Minutes Door 2</h2>
                              <ul className='door-spec' >
                                <li> <strong>Door Size</strong> : 2400x1805 mm </li>
                                <li> <strong>Frame Size</strong> : 140x75 mm </li>
                                <li> <strong>Shutter Thickness</strong> : 64 mm </li>
                                <li> <strong>12MM Thick</strong> :  PROMAT </li>
                                <li> <strong>Certification</strong> : SPECTRO </li>
                              </ul>
                            </div>
                            <div className='doors-second'>
                              <h6>Material Testing Standars</h6>
                              <p>BS 476 Part 22: 1987, IS 3614 Part 2</p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className='col-12 col-md-11 col-lg-10'>
                    <div className='firedoor-card'>

                      <div className='card-content'>
                        <div className='row'>
                          <div className='col-12 col-xl-4'>
                            <img src={Door120min1Img} />
                          </div>
                          <div className='col-12  col-xl-8 doors'>
                            <div className='doors-first'>
                            <h2 className='door-name'>120 Minutes Door 1 </h2>
                            <ul className='door-spec' >
                              <li> <strong>Door Size</strong> : 2270x1075 mm </li>
                              <li> <strong>Frame Size</strong> : 150x75 mm </li>
                              <li> <strong>Shutter Thickness</strong> : 55 mm </li>
                              <li> <strong>9MM Thick</strong> :  PROMATECT® </li>
                              <li> <strong>Certification</strong> : SPECTRO </li>
                            </ul>
                            </div>
                            <div className='doors-second'>
                              <h6>Material Testing Standars</h6>
                              <p>BS 476 Part 22: 1987, IS 3614 Part 2</p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className='col-12 col-md-11 col-lg-10'>
                    <div className='firedoor-card'>

                      <div className='card-content'>
                        <div className='row'>
                          <div className='col-12 col-xl-4'>
                            <img src={Door120min2Img} />
                          </div>
                          <div className='col-12  col-xl-8 doors'>
                            <div className='doors-first'>
                              <h2 className='door-name'>120 Minutes Door 2 </h2>
                              <ul className='door-spec' >
                                <li> <strong>Door Size</strong> : 2400x1200 mm </li>
                                <li> <strong>Frame Size</strong> : 120x65 mm </li>
                                <li> <strong>Shutter Thickness</strong> : 65 mm </li>
                                <li> <strong>12MM Thick</strong> :  PROMATECT® - H </li>
                                <li> <strong>Certification</strong> : IPRITI </li>
                              </ul>
                            </div>
                            <div className='doors-second'>
                              <h6>Material Testing Standars</h6>
                              <p>BS 476 Part 22: 1987, IS 3614 Part 2</p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                  <div className='col-12 col-md-11 col-lg-10'>
                    <div className='firedoor-card'>

                      <div className='card-content'>
                        <div className='row'>
                          <div className='col-12 col-xl-4'>
                            <img src={Door120mindImg} />
                          </div>
                          <div className='col-12  col-xl-8 doors'>
                            <div className='doors-first'>
                            <h4 className='door-name d-none d-xl-block  d-xxl-none'>120 Minutes Double leaf Door </h4>
                            <h6 className='door-name d-xl-none d-xxl-block'>120 Minutes Double leaf Door </h6>
                            <ul className='door-spec' >
                              <li> <strong>Door Size</strong> : 2700x1200 mm, 2700x2400 mm </li>
                              <li> <strong>Frame Size</strong> : 175x80 mm </li>
                              <li> <strong>Shutter Thickness</strong> : 90 mm </li>
                              <li> <strong>20MM Thick</strong> :  PROMATECT® - L </li>
                              <li> <strong>6MM Thick</strong> :  PROMINA® 60 </li>
                              <li> <strong>Certification</strong> : IPRITI </li>
                            </ul>
                            </div>
                            <div className='doors-second'>
                              <h6>Material Testing Standars</h6>
                              <p>BS 476 Part 22: 1987, IS 3614 Part 2</p>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                <div className='d-xl-none d-xxl-none text-center'>
                  <img style={{ width: "120px",  marginBottom:"10px"}} src={fpdImg} />
                    <div className='fd-btn'>
                      <a href='https://fireprodoors.com/' target='_blank'>More on, FireProDoors.com</a> </div>
                  </div>
              </div>
            </div>
            <div className='row justify-content-center section bg-grey  p-5'>
              <div className='col-12'>
                <div className='text-center'>
                  <h1 className='mt-5 fire-standards' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Fire Door Standards</h1>
                  <p className='mb-1 indian-british inter-font' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Indian/Birtish Standard</p>
                  <p className='mb-5 inter-font' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">S 3614, Part 2, BS 476, Part 20 & 22 | Building Regulations 2000-Fire Safety-Part B</p>
                </div>
                <div className='row'>
                  <div className='col-lg-12 ' >
                    <div className='row'>
                      <div className='col-12 col-xl-6'>
                        <div className='std' data-aos-delay="0" data-aos-duration="1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">
                          <p className='mt-2 inter-font'>A fire door must be self-closing. Only the active door
                            leaf of an access panel (service ducts) can be installed
                            without a closer but with a deadlock and a “Fire Door,
                            Keep Shut” sign placed clear on the door face.</p>
                        </div>
                      </div>
                      <div className='col-12 col-xl-6'>
                        <div className='std' data-aos-delay="200" data-aos-duration="1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">
                          <p className='mt-2 inter-font'>Unless shown to be satisfactory when tested as part of a fire door assembly, the components of any hinge on which the door is hung should be made entirely from
                            materials having a melting point of atleast 800° C.</p>
                        </div>
                      </div>
                      <div className='col-12 col-xl-6'>
                        <div className='std' data-aos-delay="400" data-aos-duration="1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">
                          <p className='mt-2 inter-font'>Two fire doors may be fitted in the same opening so
                            that the total fire resistance is the sum of their
                            individual fire resistance.</p>
                        </div>
                      </div>
                      <div className='col-12 col-xl-6'>
                        <div className='std' data-aos-delay="0" data-aos-duration="1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">
                          <p className='mt-2 inter-font'>If a fire door is held open, it must be equipped with a
                            tested, automatic release mechanism actuated by an
                            automatic fire deduction and alarm system or a
                            door-closed delay device.</p>
                        </div>
                      </div>
                      <div className='col-12 col-xl-6'>
                        <div className='std' data-aos-delay="200" data-aos-duration="1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">
                          <p className='mt-2 inter-font'>Signs and other items of hardware containing plastic
                            should not be fitted on the non-fire side of the
                            wooden door or frame.</p>
                        </div>
                      </div>
                      <div className='col-12 col-xl-6'>
                        <div className='std' data-aos-delay="400" data-aos-duration="1400" data-aos="zoom-in" data-aos-once="true" data-aos-offset="300">
                          <p className='mt-2 inter-font'>Labelling is mandatory.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className='row justify-content-center section   p-5'>
              <div className='col-12'>
                <div className='text-center' data-aos-delay="0" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                  <h1 className='mt-5 faq-dsn'>FAQs</h1>
                  <p className='mb-1 indian-british inter-font'>Implementing Fire Door Safety</p>
                  <p className='mb-5 inter-font'>Many business owners and property managers have questions about how fire doors
                    should be used, day to day. Here are clear answers to some common concerns.</p>
                </div>
                <div className='row'>
                  <div className='col-lg-12 ' >
                    <div className='row' data-aos-delay="200" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                      <p className='faq-heading inter-font'>1. DO FIRE DOORS ALWAYS NEED TO BE CLOSED?</p>
                      <p className='mt-2 inter-font'>Some companies have interior fire doors that typically remain open between departments during normal business hours, but they will automatically close in the event of an emergency. If the door is not equipped with an automatic closing device, do not prop it open. While it can be convenient to put a wedge in, to keep a fire door open, creating an easy exit or to let in breeze, an open door can defeat its fire-protection capabilities in the event of a fire.</p>
                    </div>
                    <div className='row' data-aos-delay="400" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                      <p className='faq-heading inter-font'>2. SHOULD FIRE DOORS BE LOCKED?</p>
                      <p className='mt-2 inter-font'>Don’t block it or lock it. Chaining the doors shut or blocking them in any way is dangerous and may be a violation of fire safety codes. Using anything other than fire-rated, fail-safe hardware can lead to injury or even loss of life in an emergency requiring quick evacuation. Finding the doors blocked can be a significant safety hazard and cause further panic for an already scared crowd.</p>
                    </div>
                    <div className='row' data-aos-delay="600" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                      <p className='faq-heading inter-font'>3. CAN WE MAKE CHANGES TO THE DOOR FRAME OR HARDWARE?</p>
                      <p className='mt-2 inter-font'>Since Fire Doors are tested as complete door assemblies and manufactured in factories, onsite modifications are not permissible.</p>
                    </div>
                    <div className='row' data-aos-delay="800" data-aos-duration="1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                      <p className='faq-heading inter-font'>4. WHEN DO FIRE DOORS NEED TO BE REPLACED?</p>
                      <p className='mt-2 inter-font'>The overall fire resistance and rating of a fire door may deteriorate over time. To ensure that the door is well maintained and still ensures adequate protection, these doors must be inspected yearly. Follow the recommended maintenance and repair schedule. The need for replacement will depend on the wear and tear that it experiences.</p>
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

export default FireDoors;
