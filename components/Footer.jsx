import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebookF,faInstagram,} from '@fortawesome/free-brands-svg-icons'
const Footer = () => (

  <div id="footer" >
  <a href="https://twitter.com/RichardWhitDev" target="_blank"><FontAwesomeIcon icon={faTwitter} className='sm' /></a>
  <a href="https://www.facebook.com/richard.whittington.35" target="_blank"><FontAwesomeIcon icon={faFacebookF} className='sm' /></a>
  <a href="https://www.instagram.com/rlwhttng/" target="_blank"><FontAwesomeIcon icon={faInstagram} className='sm' /></a>
  <a href="mailto:richardlwhittington@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='sm' /></a>
  <p className="copyright-text">©Copyright 2023 MilieDog Enterprises</p>
</div>
);

export default Footer;
