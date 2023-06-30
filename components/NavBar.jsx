import React, { useEffect, useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
   const toggle = () => setIsOpen(!isOpen);

  return (
 <>
 <div className="header links">
  <div id="title">
    <div className="container-fluid">
<nav className="navbar navbar-expand-lg bg-body-tertiary" >
  {/* <div className="container-fluid"> */}
    <a className="navbar-brand" href="/">BarkAmigos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#footer">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">Pricing</a>
        </li>
        <li className="nav-item">
          <a clasName="nav-link" href="#cta">Sign Up</a>
        </li>
      </ul>
    </div>
  {/* </div> */}
</nav>
<div className="row">
  <div className="col-md-6 col-sm-12">
    <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
    <button type="button" className="btn btn-dark btn-lg download-button">
       Sign In
    </button>
    <button type="button" className="btn btn-dark btn-lg download-button">
      <i class="fa-solid fa-paw"></i> Sign Up
    </button>
  </div>
  <div className="phone-img col-md-6 col-sm-12">
    <img
      classname="rotate_image img-fluid title-image"
      src="/img-clear.jpeg"
      alt="logo-mockup"
    />
  </div>
</div>
</div>
</div>
</div>
  </>
  );
};

export default NavBar;
