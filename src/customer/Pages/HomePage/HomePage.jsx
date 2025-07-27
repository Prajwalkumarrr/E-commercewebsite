import React from 'react';
import MainCarousel from '../../Component/HomeCarousel/MainCarousel.jsx';
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel.jsx';
import { mens_kurta } from '../../../Data/MensKurtas';
export const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='-my-10 py-20 flex flex-col justify-center px-5 lg:px-3 space-x-0'>
        <HomeSectionCarousel data={mens_kurta} />
        <div className='-my-10 py-20 flex flex-col justify-center px-5 lg:px-3 space-x-0'></div>
        <HomeSectionCarousel data={mens_kurta} />
        <div className='-my-10 py-20 flex flex-col justify-center px-5 lg:px-3 space-x-0'></div>
        <HomeSectionCarousel data={mens_kurta} />
     
      </div>
    </div>
  );
};

export default HomePage;
