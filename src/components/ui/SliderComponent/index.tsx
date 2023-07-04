import React, {FC} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import images from "@/assets/image";

import {SliderBox, SliderContainer} from '@/components/ui/SliderComponent/style';
import {ImageContainer} from "@/components/ui/AboutMe/style";

const SliderComponent: FC = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <SliderContainer>
            <SliderBox>
                <Slider {...settings}>
                    <div className='imageContainer'>
                        <Image
                            src={images.certificate1}
                            alt="1"
                        />
                    </div>
                    <div className='imageContainer'>
                        <Image
                            src={images.certificate2}
                            alt="2"
                        />
                    </div>
                    <div className='imageContainer'>
                        <Image
                            src={images.certificate3}
                            alt="3"
                        />
                    </div>
                    <div className='imageContainer'>
                        <Image
                            src={images.certificate4}
                            alt="4"
                        />
                    </div>
                </Slider>
            </SliderBox>
        </SliderContainer>
    );
};

export default SliderComponent;