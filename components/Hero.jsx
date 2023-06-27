import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Hero = () => (
  <div className="row">
  <div className="col-md-6 col-sm-12">
    <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
    <Link
    href="">Sign In
    </Link>
    <button type="button" className="btn btn-dark btn-lg download-button">
     Sign Up
    </button>


  </div>
  <div className="phone-img col-md-6 col-sm-12">
    <img
      className="rotate_image img-fluid title-image"
      src="/img-clear.jpeg"
      alt="logo-mockup"
    />
  </div>
</div>

);

export default Hero;
