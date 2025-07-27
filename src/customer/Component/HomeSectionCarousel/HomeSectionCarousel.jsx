import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeSectionCard } from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { mens_kurta } from '../../../Data/MensKurtas';

const HomeSectionCarousel = () => {
    const carousel = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 6 },
    };

    const slidePrev = () => carousel.current.slidePrev();
    const slideNext = () => carousel.current.slideNext();

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = mens_kurta.slice(0,9).map((item, index) => <HomeSectionCard key={index} product={item} />);

    return (
        <div className='border relative p-4 '>
            <AliceCarousel
                ref={carousel}
                items={items}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
                controlsStrategy="responsive"
            />

            {activeIndex !== items.length - 5 && (
                <Button
                    variant="contained"
                    className="z-50"
                    onClick={slideNext}
                    sx={{ position: 'absolute', top: '8rem', right: '2rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }}
                        
                >
                    <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
            )}

            {activeIndex !== 0 && (
                <Button
                    variant="contained"
                    className="z-50"
                    onClick={slidePrev}
                    sx={{ position: 'absolute', top: '8rem', left: '2rem', transform: 'translateX(-50%) rotate(-90deg)', bgcolor: 'white' }}
                    aria-label="previous"
                >
                    <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
            )} 
        </div>
    );
};

export default HomeSectionCarousel;
