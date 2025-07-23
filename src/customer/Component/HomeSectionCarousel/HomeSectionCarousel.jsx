import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeSectionCard } from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} />);

    return (
        <div className='border relative p-4 border-black'>
            <AliceCarousel
                items={items}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
            />

            {activeIndex !== items.length - 5 && (
                <Button
                    variant="contained"
                    className="z-50"
                    onClick={slideNext}
                    sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }}
                    aria-label="next"
                >
                    <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
            )}

            {activeIndex !== 0 && (
                <Button
                    variant="contained"
                    className="z-50"
                    onClick={slidePrev}
                    sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-50%) rotate(-90deg)', bgcolor: 'white' }}
                    aria-label="previous"
                >
                    <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
            )}
        </div>
    );
};

export default HomeSectionCarousel;
