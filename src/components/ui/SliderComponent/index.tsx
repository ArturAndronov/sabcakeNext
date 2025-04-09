import React, {FC} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import images from "@/assets/image";

import { SliderContainer} from '@/components/ui/SliderComponent/style';

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
                <Slider {...settings}>
                    <div className='imageContainerSlider'>
                        <Image
                            src={images.certificate1}
                            alt="1"
                        />
                    </div>
                    <div className='imageContainerSlider'>
                        <Image
                            src={images.certificate2}
                            alt="2"
                        />
                    </div>
                    <div className='imageContainerSlider'>
                        <Image
                            src={images.certificate3}
                            alt="3"
                        />
                    </div>
                    <div className='imageContainerSlider'>
                        <Image
                            src={images.certificate4}
                            alt="4"
                        />
                    </div>
                </Slider>
        </SliderContainer>
    );
};

export default SliderComponent;