import React, { useState } from 'react';
import '../App.css';
import logo from '../logo.svg'
import { useNavigate } from "react-router-dom";

const OverlayNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const navigate = useNavigate();
  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
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
        <div id="myNav" className={`overlay ${isOpen ? 'open' : ''}`}>

          <div className="overlay-content">
            <div>
              <a href="#close" style={{ fontSize: '18px', cursor: 'pointer' }} className="closebtn" onClick={closeNav}>&#9747;</a>
              <a href="/">Home</a>
              <a href="/AboutUs">About Us</a>
              <a href="/DesignAndBuild">Design & build</a>
              <a href="/Manufacturing">Manufacturing</a>
              <a href="/Projects">Projects</a>
              <a href="/FireDoors">Fire Door</a>
              <a href="/AwardsAndTestimonials">Press, Awards & Testimonials</a>
              <a href="/Career">Career</a>
            </div>
            <div>
              <div className='row'>
                <div className='col-sm-12'>
                  <h6 className='mt-5 mb-0 text-uppercase'>Head Office</h6>
                  <p className=''>Unit No.522, Laxmi Mall, Bldg. 5, Laxmi Ind. Est.,New Link Rd, Andheri (W),Mumbai - 400 053.</p>

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
