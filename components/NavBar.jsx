
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="header">
        <div id="title" >
          <div className="container-fluid ">
            <Navbar light expand="lg" className="links">
              <NavbarBrand id='heading' href="/" >BarkAmigos</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="#footer">Contact</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pricing">Pricing</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#cta">Sign Up</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <h1 className="big-heading mb-5">Dog Walking is Better with Two.</h1>
                <button type="button" className="btn btn-dark btn-lg download-button">
                  Sign In
                </button>
                <button type="button" className="btn btn-dark btn-lg download-button">
                  <i className="fa-solid fa-paw"></i> Sign Up
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
