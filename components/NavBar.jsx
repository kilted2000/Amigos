import React, { useEffect, useState } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
   const toggle = () => setIsOpen(!isOpen);

  return (
 <>
    <div className="header" >
      <div className='navbar navbar-expand-lgbar-dark nav' id="title">
      
    
        <div className='.container-fluid '>
        <nav className="navbar navbar-expand-lgbar-dark nav">
            <a className="navbar-brand"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto">
                <li className="navbar-item">
                  <a className="nav-link" href="#footer">Contact</a>
                </li>
                <li className="navbar-item">
                  <a className="nav-link" href="#pricing">Pricing</a>
                </li>
                <li className="navbar-item">
                  <Link className="nav-link" href="#cta">Sign In</Link>
                </li>
              </ul>
            </div>
          </nav>
      </div>
    </div>
    </div>
    
  </>
  );
};

export default NavBar;
