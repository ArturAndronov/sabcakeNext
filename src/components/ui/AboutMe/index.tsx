import React, { FC } from 'react';

import images from "@/assets/image";
import Image from "next/image";
import SliderComponent from "@/components/ui/SliderComponent";
import { AboutMeContainer } from "@/components/ui/AboutMe/style";

const AboutMe: FC = () => {

    return (
        <>
            <AboutMeContainer id="portfolio">
               
                    <div className='imageContainer'>
                        <Image
                            src={images.sab}
                            alt='MyPhoto'
                        />
                    </div>
                    <div className='aboutMeContent'>
                        <h1>About me</h1>
                        <p>My name is Sabina and I am a home pastry chef! Sweets have always been present in my life and
                            have been an integral part of it, looking back now, I understand that cooking various dishes
                            has always attracted and fascinated me, with the birth of my son, the craving for making
                            delicious , natural and homemade food has become even stronger, my son has become my
                            incentive to realize himself as a pastry chef, every New month of his life I was celebrating
                            with a new cake and it was a small step on the way to a big dream. With each new cake, my
                            skills increased, and the desire to master new techniques and processes grew, the birth of
                            my daughter only increased this interest, and moving to a new country became one of the most
                            important stages for me in a new place, everything sparkled with new colors, new friends and
                            acquaintances appeared, who inspired new achievements and pushed me to a new step- and so,
                            step by step , I became who I am now, a home- made pastry chef with a great love for his
                            work and big dreams and plans for the future .</p>
                    </div>
                    <div className='sliderContainer'>
                        <SliderComponent />
                    </div>
             
            </AboutMeContainer>
        </>
    )
}

export default AboutMe;