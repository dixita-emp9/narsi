import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import OverlayNav from './components/NavHeader';
import projectsbanner from './images/projects-banner.jpg'
import designImg from './images/design.jpg'
import developImg from './images/develop.jpg'
import deliverImg from './images/deliver.jpg'
import SmoothScroll from "./SmoothScroll";
import Marquee from "react-fast-marquee";
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import LeftContainer from './components/LeftContainer';

function importAll(r) {
  let images = {};
  r.keys().forEach(key => images[key] = r(key));
  return images;
}

const clientImages = importAll(require.context('./images/clients', false, /\.(png|jpe?g|svg)$/));


function Projects() {

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
          <header className='projects' >
            <Carousel showIndicators={false} showStatus={false} showArrows={false} showThumbs={false}>
              <div>
                <img src={projectsbanner} />
                <div className='manufacturing-text-dsn'>
                  <h1 className='manufacturing-heading' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">Projects</h1>
                  <p className='manufacturing-subheading inter-font' data-aos-delay="200" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true">We take great price in our projects. Our experience spans across all major industries.</p>
                </div>
              </div>
            </Carousel>
          </header>
          <div className='container-fluid'>
            <div className='row justify-content-center section bg-wood'>
              <div className='col-lg-12 col-sm-12'>
                <h2 className='mt-4 mb-5 projects' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">All Projects</h2>
                <div className='row d-block d-sm-none'>
                  <Tabs defaultActiveKey="government" className="mb-3 projects-tab" orientation="vertical" >
                    <Tab eventKey="government" title="Government">
                      <div className="tab-pane" id="list-government" role="tabpanel" aria-labelledby="list-government-list">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"> <a href="/projectDetail/1">New Parliament Building- Delhi </a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/2">Vice President Enclave New Delhi </a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/3">Executive Enclave New Delhi </a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/4">ITPO Delhi (Shapoorji Pallonji And Company) </a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/5">Common Ctrl Secretariat New Delhi </a> <i className="bi bi-arrow-right"></i></li>
                        </ul>
                      </div>
                    </Tab>
                    <Tab eventKey="corporate" title="Corporate interior">
                      <div className="tab-pane" id="list-corporate" role="tabpanel" aria-labelledby="list-corporate-list">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"> <a href="/projectDetail/6">TCS SEZ Indore</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/7">Amazon Development Centre Pune</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/8">Wipro Limited -(Kodathi) Bangalore</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/9">Google RIO Banglore</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/10">Infosys SDB-8 Pune</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/11">ANSR BMS Hyderabad</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/12">Divyasree Avance Banglore</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/13">DivyaSree Omega Hyderabad</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/14">Cowtown Infotech Service Pvt Ltd Lodha Worli</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/15">Asian Paint Santacruz</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/16">Asian Paint Lower Parel</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/17">Master Card Pune</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/18">Jindal Centre New Delhi</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/19">TCS Ltd PH-1A&1B SP-2 Pune (SEZ)</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/20">Samsung Max Tower  Noida</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/21">Kalaptru Avana Panvel</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/22">E & Y Services Pvt. Ltd. Dadar</a> <i className="bi bi-arrow-right"></i></li>
                        </ul>
                      </div>
                    </Tab>
                    <Tab eventKey="education" title="Education">
                      <div className="tab-pane " id="list-education" role="tabpanel" aria-labelledby="list-education-list">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"> <a href="/projectDetail/23">AVVP Nursing College Faridabad</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/24">Plaksha Univesity Mohali</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/25">Amrita Vishwa Vidyapeetham University-Amaravati</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/26">NSBUoE Sikkim</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/27">Prerna School Vadnagar</a> <i className="bi bi-arrow-right"></i></li>
                        </ul>
                      </div>
                    </Tab>
                    <Tab eventKey="hospital" title="Hospital">
                      <div className="tab-pane " id="list-hospital" role="tabpanel" aria-labelledby="list-hospital-list">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"> <a href="/projectDetail/28">Breach Candy Hospital Mumbai</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/29">AIMS Hospital - Faridabad</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/30">Midas Multispecialty Hospital Pvt. Ltd. Nagpur</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/31">Karkinos Healthcare North East Private Iimited</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/32">Advance Veterinary Care Foundation Mumbai </a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/33">Max Hospital Nanavati</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/34">Sant Nirankari Hospital New Delhi</a> <i className="bi bi-arrow-right"></i></li>
                        </ul>
                      </div> </Tab>
                    <Tab eventKey="hotel" title="Hotels">
                      <div className="tab-pane " id="list-industrial" role="tabpanel" aria-labelledby="list-hotels-list">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"> <a href="/projectDetail/35">Brookfield Waterstone Andheri</a> <i className="bi bi-arrow-right"></i></li>
                        </ul>
                      </div>
                    </Tab>
                    <Tab eventKey="residential" title="Residential">
                      <div className="tab-pane " id="list-residential" role="tabpanel" aria-labelledby="list-residential-list">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"> <a href="/projectDetail/36">VVR Project New Delhi</a> <i className="bi bi-arrow-right"></i></li>
                        </ul>
                      </div> </Tab>
                    <Tab eventKey="commercial" title="Exhibition Center">
                      <div className="tab-pane " id="list-commercial" role="tabpanel" aria-labelledby="list-commercial-list">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"> <a href="/projectDetail/37">RRL Swadesh Mumbai Jio Word Centre</a> <i className="bi bi-arrow-right"></i></li>
                        </ul>
                      </div>
                    </Tab>

                    <Tab eventKey="bank" title="Bank">
                      <div className="tab-pane " id="list-bank" role="tabpanel" aria-labelledby="list-bank-list">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"> <a href="/projectDetail/38">Kotak Thane 9th Floor</a> <i className="bi bi-arrow-right"></i></li>
                          <li className="list-group-item"> <a href="/projectDetail/40">Kotak Commadities BKC</a> <i className="bi bi-arrow-right"></i></li>
                        </ul>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
                <div className="row d-none d-md-block projects-vertical">
                  <Tab.Container defaultActiveKey="government1">
                    <Row>
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item><Nav.Link eventKey="government1">Government</Nav.Link> </Nav.Item>
                          <Nav.Item><Nav.Link eventKey="corporate">Corporate Interior</Nav.Link> </Nav.Item>
                          <Nav.Item><Nav.Link eventKey="education">Education</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="hospital">Hospital</Nav.Link></Nav.Item>
                          {/* <Nav.Item><Nav.Link eventKey="industrial">Industrial</Nav.Link></Nav.Item> */}
                          {/* <Nav.Item><Nav.Link eventKey="civil">Civil & Culture</Nav.Link></Nav.Item> */}
                          <Nav.Item><Nav.Link eventKey="residential">Residential</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="commercial">Exhibition</Nav.Link></Nav.Item>
                          {/* <Nav.Item><Nav.Link eventKey="healthcare">Healtcare</Nav.Link></Nav.Item> */}
                          <Nav.Item><Nav.Link eventKey="bank">Bank</Nav.Link></Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content>
                          <Tab.Pane eventKey="government1">
                            <div className="tab-pane" role="tabpanel" aria-labelledby="list-government-list">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href="/projectDetail/1">New Parliament Building- Delhi </a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/2">Vice President Enclave New Delhi </a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/3">Executive Enclave New Delhi </a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/4">ITPO Delhi (Shapoorji Pallonji And Company) </a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/5">Common Ctrl Secretariat New Delhi </a> <i className="bi bi-arrow-right"></i></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="corporate">
                            <div className="tab-pane" id="list-corporate" role="tabpanel" aria-labelledby="list-corporate-list">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href="/projectDetail/6">TCS SEZ Indore</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/7">Amazon Development Centre Pune</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/8">Wipro Limited -(Kodathi) Bangalore</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/9">Google RIO Banglore</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/10">Infosys SDB-8 Pune</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/11">ANSR BMS Hyderabad</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/12">Divyasree Avance Banglore</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/13">DivyaSree Omega Hyderabad</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/14">Cowtown Infotech Service Pvt Ltd Lodha Worli</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/15">Asian Paint Santacruz</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/16">Asian Paint Lower Parel</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/17">Master Card Pune</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/18">Jindal Centre New Delhi</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/19">TCS Ltd PH-1A&1B SP-2 Pune (SEZ)</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/20">Samsung Max Tower  Noida</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/21">Kalaptru Avana Panvel</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/22">E & Y Services Pvt. Ltd. Dadar</a> <i className="bi bi-arrow-right"></i></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="education">
                            <div className="tab-pane " id="list-education" role="tabpanel" aria-labelledby="list-education-list">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href="/projectDetail/23">AVVP Nursing College Faridabad</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/24">Plaksha Univesity Mohali</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/25">Amrita Vishwa Vidyapeetham University-Amaravati</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/26">NSBUoE Sikkim</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/27">Prerna School Vadnagar</a> <i className="bi bi-arrow-right"></i></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="hospital">
                            <div className="tab-pane " id="list-hospital" role="tabpanel" aria-labelledby="list-hospital-list">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href="/projectDetail/28">Breach Candy Hospital Mumbai</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/29">AIMS Hospital - Faridabad</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/30">Midas Multispecialty Hospital Pvt. Ltd. Nagpur</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/31">Karkinos Healthcare North East Private Iimited</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/32">Advance Veterinary Care Foundation Mumbai </a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/33">Max Hospital Nanavati</a> <i className="bi bi-arrow-right"></i></li>
                                <li className="list-group-item"> <a href="/projectDetail/34">Sant Nirankari Hospital New Delhi</a> <i className="bi bi-arrow-right"></i></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="hotels">
                            <div className="tab-pane " id="list-industrial" role="tabpanel" aria-labelledby="list-hotels-list">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href="/projectDetail/35">Brookfield Waterstone Andheri</a> <i className="bi bi-arrow-right"></i></li>
                              </ul>
                            </div>
                          </Tab.Pane>

                          <Tab.Pane eventKey="residential">
                            <div className="tab-pane " id="list-residential" role="tabpanel" aria-labelledby="list-residential-list">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href="/projectDetail/36">VVR Project New Delhi</a> <i className="bi bi-arrow-right"></i></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="commercial">
                            <div className="tab-pane " id="list-commercial" role="tabpanel" aria-labelledby="list-commercial-list">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href="/projectDetail/37">RRL Swadesh Mumbai Jio Word Centre</a> <i className="bi bi-arrow-right"></i></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          {/* <Tab.Pane eventKey="healthcare">
                        <div className="tab-pane " id="list-healthcare" role="tabpanel" aria-labelledby="list-healthcare-list">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Healtcare Project 1<i className="bi bi-arrow-right"></i></li>
                            <li className="list-group-item">Healtcare Project 2<i className="bi bi-arrow-right"></i></li>
                            <li className="list-group-item">Healtcare Project 3<i className="bi bi-arrow-right"></i></li>
                          </ul>
                        </div>
                      </Tab.Pane> */}
                          <Tab.Pane eventKey="bank">
                            <div className="tab-pane " id="list-bank" role="tabpanel" aria-labelledby="list-bank-list">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"> <a href="/projectDetail/38">Kotak Thane 9th Floor</a> <i className="bi bi-arrow-right"></i></li>
                                {/* <li className="list-group-item"> <a href="/projectDetail/39">VVR Project New Delhi</a> <i className="bi bi-arrow-right"></i></li> */}
                                <li className="list-group-item"> <a href="/projectDetail/40">Kotak Commadities BKC</a> <i className="bi bi-arrow-right"></i></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>

                </div>

              </div>
            </div>

            <div className='row  text-center section mb-5'>
              <div className='col-11 position-relative'>
                <h2 className='mt-5 mb-5 d-flex align-self-start projects' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Our Clientele</h2>
                <Marquee speed={100} autoFill={true} className="marquee-container">
                  <div className='d-flex justify-content-around'>
                    {Object.entries(clientImages).slice(0, Math.ceil(Object.keys(clientImages).length / 2)).map(([key, value]) => (
                      <div key={key} className='client-logo'>
                        <img src={value} alt={key} />
                      </div>
                    ))}
                  </div>

                </Marquee>
                <Marquee speed={100} direction={"right"} autoFill={true} className="marquee-container mt-4">

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

          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
