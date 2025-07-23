import React from 'react';
import MainCarousel from '../../Component/HomeCarousel/MainCarousel.jsx';
import HomeSectionCarousel from '../../Component/HomeSectionCarousel/HomeSectionCarousel.jsx';

export const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel />
      </div>
    </div>
  );
};

export default HomePage;
