import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeSectionCard } from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 4},
    };

    const items = [1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} />);

    return (
        <div className='p-4'>
            <AliceCarousel
                items={items}
                disableButtonsControls
                infinite
                responsive={responsive}
            />
        </div>
    );
};

export default HomeSectionCarousel;
