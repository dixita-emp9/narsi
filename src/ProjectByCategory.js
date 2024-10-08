import React, { useEffect ,useState} from 'react';
import './App.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import OverlayNav from './components/NavHeader';
// import newparliamentbuilding3 from './images/newparliamentbuilding/3.jpg'
// import newparliamentbuilding2 from './images/newparliamentbuilding/2.png'
// import newparliamentbuilding4 from './images/newparliamentbuilding/4.jpg'


import Marquee from "react-fast-marquee";
import Footer from './components/Footer';

import Carousel from 'react-bootstrap/Carousel'
import SmoothScroll from "./SmoothScroll";
import projectData from './projectData.json'
import LeftContainer from './components/LeftContainer';
import noImage from './images/noimage.jpeg'

function Projectsbycategory() {
  let { category } = useParams();
  const projects = projectData.filter(item => item.category.toLocaleLowerCase() === category.toLocaleLowerCase());
  console.log(projects)
  const [projectImages, setProjectImages] = useState([]);

  function importAll(r) {
    let images = {};
    r.keys().forEach(key => images[key] = r(key));
    console.log(images);
    return Object.values(images);
  }

  useEffect(() => {
    const fetchImages = async () => {
      if (projects) {
        const context = require.context("./images", false, /\.(png|jpe?g|svg)$/);
       // const images = context("./aimsfaridabad/1.jpeg");
        //console.log(images)
    };
  }
  console.log(category)
   // fetchImages();
  }, [projects]);
 
  const images = require.context('./images', true, /\.jpeg$/);
  const getImage = (path) => {
    try {
      return images(`./${path}/1.jpeg`);
    } catch (error) {
      console.error('Image not found:', path);
      return null; // Or a placeholder image path
    }
  };
  
  const [isOpen,setIsOpen] = useState(false)
  const setNav =(menu)=>{
    setIsOpen(menu)
  }
 
  const location = useLocation();
  const navigate = useNavigate();

  const handleLeave = (e, path) => {
   
    e.preventDefault();
    document.body.classList.remove('static');
    document.body.classList.remove('aos-animate');
    document.body.classList.add('loading');
    setTimeout(() => {
     navigate(path);
    }, 1500); // 1500ms delay for the transition effect
  };

  return (
    <div className={`body ${isOpen ? 'open' : ''}`}>
      {/* <SmoothScroll /> */}
      <OverlayNav setNav={(e)=>setNav(e)} />
      <LeftContainer />
      <div className='smoothScroll-container' >
        <div className='margin-container'>
          <div className='row mt-5 justify-content-center'>
            <div className='p-3 pb-0 d-flex flex-column mt-5 pt-3'>
              <p className='align-self-end text-right'>
              <ul className='project-categories'>
              <li ><a  href="/Projects" >All Projects</a> </li>
                  <li><a href="/Projectsbycategory/government"  className={projects[0].category ==="Government"?'active':''}>Government</a> </li>
                  <li><a href="/Projectsbycategory/commercial" className={projects[0].category ==="commercial"?'active':''}>Corporate interior</a> </li>
                  <li><a href="/Projectsbycategory/Hospital" className={projects[0].category ==="Hospital"?'active':''}>Hospital</a> </li>
                  <li><a href="/Projectsbycategory/Residential" className={projects[0].category ==="Residential"?'active':''}>Residential</a> </li>
                  <li><a href="/Projectsbycategory/Education" className={projects[0].category ==="Education"?'active':''}>Education</a> </li>
                  <li><a href="/Projectsbycategory/Exhibition" className={projects[0].category ==="Exhibition"?'active':''}>Exhibition</a> </li>
                  <li><a href="/Projectsbycategory/Bank" className={projects[0].category ==="Bank"?'active':''}>Bank</a> </li>
                </ul>
                {/* <a href='/projects'>   All Projects | Government | Corporate interior | Hospital |  Residential | Education | Exhibition | Bank</a></p> */}
                </p>
              {/* <h1 className='text-right mt-4'>{project.projectName}</h1> */}
            </div>
            <div className='row section  pt-0 bg-wood justify-content-center'>
            <div className='col-lg-12'>
              <div className='row mt-5 '>
                {projects?.map(proj=>{
                    const imgSrc = getImage(proj?.imagePath);
                    const box =imgSrc?
               <div className='category-project-box col-lg-4 col-12'>  
                <a href={`/projectDetail/${proj.projectId}`} onClick={e=>handleLeave(e,`/projectDetail/${proj.projectId}`)}>
                    <img
                     className="d-block w-100"
                     src={imgSrc}
                   />
                   <p className='name'> {proj.projectName}</p>
                   </a>
                  </div> : <div className='category-project-box col-lg-4 col-12'>  
                <a href={`/projectDetail/${proj.projectId}`} onClick={e=>handleLeave(e,`/projectDetail/${proj.projectId}`)}>
                    <img
                     className="d-block w-100"
                     src={noImage}
                   />
                   <p className='name'> {proj.projectName}</p>
                   </a>
                  </div>
                  return box;
                })}
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

export default Projectsbycategory;
