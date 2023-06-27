import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Pricing from '../components/pricing';
import Cta from '../components/Cta';
export default function Index() {
  return (
    <>
      <Hero />
      <hr />
      <Content />
      <hr />
      <Pricing />
      <Cta />
    </>
  );
}
