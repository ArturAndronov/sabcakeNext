import {Container, FirstBlock, Footer, FourBlock, Header, SecondBlock, ThirdBlock} from "@/styles";
import React from "react";
import images from "@/assets/image";
import Image from "next/image";
import Link from "@mui/material/Link";
import {CustomButton} from "@/components/ui/Header/style";
import {ImageContainer} from "@/components/ui/AboutMe/style";

const Verstka = () => {
    return (
        <>
            <Header>
                <div className='container'>
                    <div className="logo">
                        <Image
                            src={images.logo}
                            alt="Logo"
                        /></div>
                    <div className="menu">
                        <a href="#">Home</a>
                        <a href="#">Gallery</a>
                        <a href="#">Shop</a>
                        <a href="#">Portfolio</a>
                    </div>

                </div>
            </Header>
            <FirstBlock>
                <div className='container'>
                    <h1>A Sweet Bite</h1>
                    <p>Take it all in a single bite. Import the full demo content with a single mouse click using the
                        one-click import feature.</p>
                    <CustomButton>
                        <Link href="/">
                            Take a bite
                        </Link>
                    </CustomButton>
                </div>
            </FirstBlock>
            <SecondBlock>
                <div className='container'>
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
                    <div>
                        <Image
                            src={images.certificate1}
                            alt='MyPhoto'
                        />
                    </div>
                </div>
            </SecondBlock>
            <ThirdBlock>
                <div className='container'>
                    <div className='title'>
                        <h1>Why Our Products is the Best</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque, blandit per eu
                            aliquet nascetur vulputate libero vestibulum, maecenas suspendisse iaculis quisque magnis
                            curabitur.</p>
                    </div>
                    <div className='content'>
                        <div>
                            <div className='number'>
                                1
                            </div>
                            <h1>Only natural ingredients</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque, blandit per eu
                                aliquet nascetur.</p>
                        </div>
                    </div>
                </div>
            </ThirdBlock>
            <FourBlock></FourBlock>
            <Footer></Footer>
        </>
    )
}

export default Verstka

