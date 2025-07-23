import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = mainCarouselData.map((item) => (
    <div className="px-6  ">
        <img className='cursor-pointer w-full h-full object-cover' src={item.image} alt=""/>
    </div>
));

const MainCarousel = () => (
    <AliceCarousel
        onClickItem={(item) => console.log(item)}
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        responsive={responsive}
    />
);
export default MainCarousel;