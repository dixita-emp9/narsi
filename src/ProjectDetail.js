import React, { useEffect ,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useParams } from 'react-router-dom';
import OverlayNav from './components/NavHeader';
// import newparliamentbuilding3 from './images/newparliamentbuilding/3.jpg'
// import newparliamentbuilding2 from './images/newparliamentbuilding/2.png'
// import newparliamentbuilding4 from './images/newparliamentbuilding/4.jpg'
import homebanner from './images/home.jpg'
import designImg from './images/design.jpg'
import developImg from './images/develop.jpg'
import projImg from './images/project-image.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Marquee from "react-fast-marquee";
import Footer from './components/Footer';

import Carousel from 'react-bootstrap/Carousel'
import SmoothScroll from "./SmoothScroll";
import projectData from './projectData.json'
import LeftContainer from './components/LeftContainer';

function ProjectDetail() {
  let { id } = useParams();
  const project = projectData.find(item => item.projectId === id);
  const [projectImages, setProjectImages] = useState([]);

  function importAll(r) {
    let images = {};
    r.keys().forEach(key => images[key] = r(key));
    console.log(images);
    return Object.values(images);
  }

  useEffect(() => {

    AOS.init({
      duration: 1000, // You can adjust this duration as needed
    });

    const fetchImages = async () => {
      if (project) {
        const context = require.context("./images", false, /\.(png|jpe?g|svg)$/);
        //const images = context("./aimsfaridabad/1.jpeg");
        //console.log(images)
    };
  }
    fetchImages();
  }, [project]);

  // if (project) {
  //   console.log(`./images/${project.imagePath}`)
  //   const context = require.context(`./images/${project.imagePath}`, false, /\.(png|jpe?g|svg)$/);
  //   projectImages = importAll(context);
  // }
  
  return (
    <div>
      {/* <SmoothScroll /> */}
      <OverlayNav />
      <LeftContainer />
      <div className='smoothScroll-container' >
        <div className='margin-container'>
          <div className='row mt-5 justify-content-center'>
            <div className='d-flex flex-column mt-5 pt-3 project-detail-padding-dsn'>
              <p className='align-self-end text-right'>
                <ul className='project-categories'>
                 <li ><a  href="/Projects" >All Projects</a> </li>
                  <li><a href="/Projectsbycategory/government"  className={project.category ==="Government"?'active':''}>Government</a> </li>
                  <li><a href="/Projectsbycategory/commercial" className={project.category ==="commercial"?'active':''}>Corporate interior</a> </li>
                  <li><a href="/Projectsbycategory/Hospital" className={project.category ==="Hospital"?'active':''}>Hospital</a> </li>
                  <li><a href="/Projectsbycategory/Residential" className={project.category ==="Residential"?'active':''}>Residential</a> </li>
                  <li><a href="/Projectsbycategory/Education" className={project.category ==="Education"?'active':''}>Education</a> </li>
                  <li><a href="/Projectsbycategory/Exhibition" className={project.category ==="Exhibition"?'active':''}>Exhibition</a> </li>
                  <li><a href="/Projectsbycategory/Bank" className={project.category ==="Bank"?'active':''}>Bank</a> </li>
                </ul>
                {/* <a href='/projects'>   All Projects | Government | Corporate interior | Hospital |  Residential | Education | Exhibition | Bank</a></p> */}
                </p>
              <div className='project-main-dsn'>
                <h1 className='pro-title-dsn' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true" data-aos-offset="300">Project Name:</h1>  
                <h1 className='text-right mt-4 project-name-dsn' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="300">{project.projectName}</h1>
              </div>
            </div>
            {project.imagePath !== "" ?
            <Carousel className='ms-4 me-4 project-detail-padding-dsn'>
            
             <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require(`./images/${project.imagePath}/1.jpeg`)}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require(`./images/${project.imagePath}/2.jpeg`)}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require(`./images/${project.imagePath}/3.jpeg`)}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require(`./images/${project.imagePath}/4.jpeg`)}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require(`./images/${project.imagePath}/5.jpeg`)}
                  alt="First slide"
                />
              </Carousel.Item>
            
            </Carousel>:null}
          </div>
          <div className='pl-3 row section bg-wood justify-content-center project-detail-padding-dsn project-detail'>
            <div className='col-lg-12'>
              <div className='row text-justify inter-font'>
                {project.des}
              </div>
              <div className='row mt-5 project-detail'>
                <div className='col-md-6 col-sm-12'>
                  <div className='row' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true" data-aos-offset="300">
                    <div className='col-md-4 pro-det-title'> <h5>Client:</h5>  </div>
                    <div className='col-md-7 mb-3 pro-det-decription'>{project.clientName || '-'}</div>
                  </div>
                  <div className='row'data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true" data-aos-offset="300"> 
                    <div className='col-md-4 pro-det-title'><h5>Location :</h5>   </div>
                    <div className='col-md-7 mb-3 pro-det-decription'>{project.location || '-'}</div>
                  </div>
                  <div className='row' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-right" data-aos-once="true" data-aos-offset="300">
                    <div className='col-md-4 pro-det-title'><h5>Scope :</h5>   </div>
                    <div className='col-md-7 mb-3 pro-det-decription'>{project.scope || '-'}</div>
                  </div>
                  {/* <div className='row'>
                  <div className='col-md-4 pro-det-title'><h5>Region :</h5>   </div>
                  <div className='col-md-7 pro-det-decription'> Maharashtra</div>
                </div> */}
                </div>
                <div className='col-md-6 col-sm-12'>
                  <div className='row'data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="300">
                    <div className='col-md-4 pro-det-title'><h5> Area :</h5>   </div>
                    <div className='col-md-7 mb-3 pro-det-decription'>{project.area || '-'}</div>
                  </div>
                  {/* <div className='row' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="300">
                  <div className='col-md-4 pro-det-title'><h5>Plot Area : </h5>  </div>
                  <div className='col-md-7 pro-det-decription'>22.2 Acres</div>
                </div> */}
                  <div className='row' data-aos-delay="0" data-aos-duration=" 1400" data-aos="fade-left" data-aos-once="true" data-aos-offset="300">
                    <div className='col-md-4 pro-det-title'><h5>Status :</h5>   </div>
                    <div className='col-md-7 mb-3 pro-det-decription'> {project.status || '-'}</div>
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

export default ProjectDetail;
