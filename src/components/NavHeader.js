import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../logo.svg'
import { useNavigate } from "react-router-dom";

const OverlayNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const navigate = useNavigate();

  // useEffect(()=>{
  //     console.log(isOpen)
  // },[isOpen]);

  const openNav = () => {
    setIsOpen(true);
    //alert('open')
    props.setNav(true);
  };

  const closeNav = () => {
    setIsOpen(false);
    props.setNav(false);
  };
  const onSearchChange = (e) => {
    setSearchInput(e.target.value)
  }
  const onSearch = (e) => {
    if (e.key === 'Enter' && searchInput) {
      navigate(`/Search/${searchInput}`,);
    }
  }
  // #c3d1ff
  return (
    <div className='container-fluid header'>
      <div className='header-wrapper d-flex justify-content-between align-items-end '>

        <div className='logo-wrapper'>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div>
          <input type='text' className='search-box' placeholder='Search' onChange={onSearchChange} onKeyDown={onSearch} />
        </div>
        <span className='mobilemenu-toggle' style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776; </span>
        <div id="myNav" className={`overlay overlay-mobile ${isOpen ? 'open' : ''}`}>

          <div className="overlay-content">
            <div>
              <a href="#close" style={{ fontSize: '18px', cursor: 'pointer' }} className="closebtn" onClick={closeNav}>&#9747;</a>
              <a href="/" className='menu-item-dsn menu-first-item'>Home</a>
              <a href="/AboutUs" className='menu-item-dsn'>About Us</a>
              <a href="/DesignAndBuild" className='menu-item-dsn'>Design & build</a>
              <a href="/Manufacturing" className='menu-item-dsn'>Manufacturing</a>
              <a href="/Projects" className='menu-item-dsn'>Projects</a>
              <a href="/FireDoors" className='menu-item-dsn'>Fire Door</a>
              <a href="/AwardsAndTestimonials" className='menu-item-dsn'>Press, Awards & Testimonials</a>
              <a href="/Career" className='menu-item-dsn'>Career</a>
            </div>
            <div>
              <div className='row'>
                <div className='col-sm-12 mobile-add-info'>
                  <h6 className='mt-5 mb-0 text-uppercase'>Plant Address</h6>
                  <p className=''>C-63, MIDC Estate, TTC Area, Turbhe, Navi-Mumbai - 400705</p>

                  <p className=''>Plot No. 46  ABCD, Kandivali Co-Operative Industrial Estate, Charkop, Kandivali (W), Mumabi - 400067</p>

                  <h6 className='mt-2 mb-0 text-uppercase'>Contact</h6>
                  <p className=''>Mail@narsi.in <br></br> Tel.: +91 22-42505555<br></br> Fax.: +91 22-42505577</p>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverlayNav;
