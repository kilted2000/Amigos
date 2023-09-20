import React from 'react';

import API from '../api/api.js/api'
import Content from '../components/Content';
import Pricing from '../components/pricing';
import Cta from '../components/Cta';
import Hero from '../components/Hero';
export default function Index() {
  return (
    <>
      
     <Hero />
      <Content />
      
      <Pricing />
      <Cta />
    </>
  );
}
