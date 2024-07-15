import React, { useState } from 'react';
import '../App.css';
import logo from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <div>
      <div>
        <div className='m-3 social-media'>
          <div><a target='_blank' href='https://www.facebook.com/NARSIGROUP/'><FontAwesomeIcon icon={faFacebookF} style={{ color: "#fff" }} /></a> </div>
          <div><a target='_blank' href='https://www.instagram.com/narsi.in/?hl=en'><FontAwesomeIcon icon={faInstagram} style={{ color: "#fff" }} /></a></div>
          <div><a target='_blank' href='https://www.linkedin.com/company/narsi-&-associates/'><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#fff" }} /></a></div>
        </div>
      </div>
      <div className='container-fluid footer bg-dark'>
        <div className='row justify-content-center'>
          <div className='col-11'>
            <div className='row section'>
              <div className='col-lg-10 col-sm-12'>
                <div className='row'>
                  <h1 className='quick-link-title'>Quick Links</h1>
                  <div className='col-lg-3 col-md-4 col-sm-12 footer-link-title'><h6 className=''>Projects by region</h6>
                    <ul className='collapsable-list'>
                      <li><a href='#'>Andhra Pradesh</a> </li>
                      <li><a href='#'>Delhi</a> </li>
                      <li><a href='#'>Goa</a> </li>
                      <li><a href='#'>Gujarat</a> </li>
                      <li><a href='#'>Haryana</a> </li>
                      <li><a href='#'>Maharashtra</a> </li>
                      <li><a href='#'>Rajasthan</a> </li>
                      <li><a href='#'>Tamil Nadu</a> </li>
                      <li><a href='#'>Telangana</a> </li>
                      <li><a href='#'>Utter Pradesh</a> </li>
                      <li><a href='#'>West Bengal</a> </li>
                    </ul>
                  </div>
                  <div className='col-lg-3 col-md-4 col-sm-12 footer-link-title'><h6 className=''>Projects by type</h6>
                    <ul className='collapsable-list'>
                      <li><a href='#'>Corporate</a> </li>
                      <li><a href='#'>Education</a> </li>
                      <li><a href='#'>Healtcare</a> </li>
                      <li><a href='#'>Hospitality</a> </li>
                      <li><a href='#'>Industrial</a> </li>
                      <li><a href='#'>Residential</a> </li>
                      <li><a href='#'>Retail</a> </li>
                      <li><a href='#'>Banking</a> </li>
                    </ul>
                  </div>

                  <div className='col-lg-3 col-md-4 col-sm-12 footer-link-title'><h6 className=''>Downloads</h6>
                    <ul className='collapsable-list'>
                      <li><a href='#'>Corporate Profile</a> </li>
                      <li><a href='#'>Corporate Spaces Profile</a> </li>
                      <li><a href='#'>Developer Spaces Profile</a> </li>
                      <li><a href='#'>Urban Design Profile</a> </li>
                      <li><a href='#'>Hospitality Profile</a> </li>
                      <li><a href='#'>Healthcare Profile</a> </li>
                      <li><a href='#'>Since & Technology Profile</a> </li>
                      <li><a href='#'>Institutional Profile</a> </li>
                    </ul>
                  </div>
                  <div className='col-lg-3  col-sm-12 footer-link-title'>
                    <h6 className=''>Quick links</h6>
                    <ul className=''>
                      <li><a href='#'>About us</a> </li>
                      <li><a href='#'>People</a> </li>
                      <li><a href='#'>Awards</a> </li>
                      <li><a href='#'>Fire doors</a> </li>
                      <li><a href='#'>Contact</a> </li>
                      <li><a href='#'>Careers</a> </li>
                    </ul>
                  </div>

                </div>
              </div>
              <div className='col-lg-2 mt-sm-2 col-sm-12 footer-link-title'>

                <h6 className='mt-5 mt-sm-2 '>Plant Address</h6>
                <p className=''>C-63, MIDC Estate, TTC Area, Turbhe, Navi-Mumbai - 400705</p>

                <p className=''>Plot No. 46  ABCD, Kandivali Co-Operative Industrial Estate, Charkop, Kandivali (W), Mumabi - 400067</p>

                <h6 className='mt-5  mt-sm-2 '>Contact</h6>
                <p className='m-0'>mail@narsi.in</p>
                <p className='m-0'>Tel.: +91 22-42505555</p>
                <p className='m-0'>Fax.: +91 22-42505577</p>
                <div className='social-media-footer'>
                  <div><a target='_blank' href='https://www.facebook.com/NARSIGROUP/'><FontAwesomeIcon icon={faFacebookF} style={{ color: "#000" }} /></a> </div>
                  <div><a target='_blank' href='https://www.instagram.com/narsi.in/?hl=en'><FontAwesomeIcon icon={faInstagram} style={{ color: "#000" }} /></a></div>
                  <div><a target='_blank' href='https://www.linkedin.com/company/narsi-&-associates/'><FontAwesomeIcon icon={faLinkedinIn} style={{  color: "#000" }} /></a></div>
                </div>
              </div>
            </div>
          </div>
          <img src={logo} className="logo" alt="logo" />
          <div className='bg-white text-center p-3'>
            <p className='text-dark m-0'>© 2024 NARSI |  All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
