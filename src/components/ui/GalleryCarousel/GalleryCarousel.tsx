import React, {FC, useState} from 'react';
import Slider from 'react-slick';
import images from "@/assets/image";
import Image from "next/image";
import {Box} from "@mui/material";
import {GalleryBox,Overlay, GalleryContainer} from "@/components/ui/GalleryCarousel/style";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GalleryCarousel: FC = () => {
    const [activeSlide, setActiveSlide] = useState(null);

    const cakes = [
        { name: 'Торт 1', image: images.gallery1 },
        { name: 'Торт 2', image: images.gallery2 },
        { name: 'Торт 3', image: images.gallery3 },
        { name: 'Торт 4', image: images.gallery4 },
        { name: 'Торт 5', image: images.gallery5 },
        { name: 'Торт 6', image: images.gallery6 },
        { name: 'Торт 7', image: images.gallery7 },
        { name: 'Торт 8', image: images.gallery8 },
        // Добавьте остальные торты
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const handleSlideHover = (index: any) => {
        setActiveSlide(index);
    };

    const renderCakes = () => {
        return cakes.map((cake, index) => (
            <GalleryBox
                key={index}
                className={`cake-item`}
            >
                <Image
                    src={cake.image}
                    alt={cake.name}
                    width={480}
                    height={480}
                />
                <Overlay>
                    <p>{cake.name}</p>
                </Overlay>
            </GalleryBox>
        ));
    };

    return (
        <GalleryContainer id="gallerycarousel">
            <Slider {...settings}>{renderCakes()}</Slider>
        </GalleryContainer>
    );
};


export default GalleryCarousel;