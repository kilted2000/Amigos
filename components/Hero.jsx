'use client'
import React from 'react';
import Logo from './Logo';
import API from '../api/api.js/api'


import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faBone } from '@fortawesome/free-solid-svg-icons';
import PageLink from './PageLink';
import AnchorLink from './AnchorLink';
const Hero = () => {
//   <div className="row" id="title">
//   <div className="col-md-6 col-sm-12 container-fluid">
//     <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
//     <Link
//     href="">Sign In
//     </Link>
//     <button type="button" className="btn btn-dark btn-lg download-button">
//      Sign Up
//     </button>


//   </div>
//   <div className="phone-img col-md-6 col-sm-12">
//     <img
//       className="rotate_image img-fluid title-image"
//       src="/img-clear.jpeg"
//       alt="logo-mockup"
//     />
//   </div>
// </div>
return(
  <>



<div className="row testing ">
 
              <div className="col-md-6 col-sm-12 ">
                <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
                <button type="button" className="btn btn-dark btn-lg download-button">
                  <FontAwesomeIcon icon={faPaw} />
                 
                    <a href="/api/auth/login" tabIndex={0}>
                      Sign In
                    </a>
                  
                </button>
                <button type="button" className="btn btn-dark btn-lg download-button">
                  <FontAwesomeIcon icon={faBone} /> Sign Up
                </button>
              </div>
              <div className="phone-img col-md-6 col-sm-12">
                <img className="rotate_image img-fluid title-image" src="/img-clear.jpeg" alt="logo-mockup" />
              </div>
              </div>
            
            </>
)};

export default Hero;
