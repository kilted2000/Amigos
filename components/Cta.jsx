import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBone } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '@auth0/nextjs-auth0/client';

const Cta = () => {
  const { user, isLoading } = useUser();
    return(    <div id="cta">
    <h3 className="cta-text">Find Your Furry Friends, Furry Friend Today.</h3>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faPaw} />   {!isLoading && !user && (
                    <a href="/api/auth/login" tabIndex={0}>
                      Log in
                    </a>
                  )}
    </button>
    <button className="download-button btn btn-dark btn-lg" type="button">
    <FontAwesomeIcon icon={faBone} />  Sign Up
    </button>
  </div>)
}


export default Cta