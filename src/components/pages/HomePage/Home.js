import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjThree } from './Data';
import Pricing from '../../Pricing';
import Pricing2 from '../../PricingSmaller';
import FirstSection from '../../FirstSection'

function Home() {
  return (
    <div className='home'>
      <FirstSection/>
      {/* <HeroSection {...homeObjTwo} /> */}
      <Pricing />
      <Pricing2 />
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default Home;
