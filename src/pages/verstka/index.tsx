import {
    AboutMe, BestProduct, CakePops, ChooseFlavor,
    Footer, Gallery,
    Header,
    Nav, OurMenu, Review,
} from "@/styles";
import React from "react";
import images from "@/assets/image";
import Image from "next/image";
import Link from "@mui/material/Link";
import {CustomButton} from "@/components/ui/Header/style";
import {ImageContainer} from "@/components/ui/AboutMe/style";
import {CustomButtonOurMenu, LinkOurMenu} from "@/components/ui/OurMenu/style";
import GalleryCarousel from "@/components/ui/GalleryCarousel/GalleryCarousel";
import {FooterBoxImg} from "@/components/common/Footer/style";

const Verstka = () => {
    return (
        <>
            <Nav>
                <div className='container'>
                    <div className="logo">
                        <Image
                            src={images.logo}
                            alt="Logo"
                        /></div>
                    <div className="menu">
                        <a href="/verstka">Home</a>
                        <a href="#gallerycarousel">Gallery</a>
                        <a href="/shop">Shop</a>
                        <a href="#portfolio">Portfolio</a>
                    </div>

                </div>
            </Nav>
            <Header>
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
            </Header>
            <AboutMe>
                <div id="portfolio" className='container'>
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
                    <div className='imageContainer'>
                        <Image
                            src={images.certificate1}
                            alt='MyPhoto'
                        />
                    </div>
                </div>
            </AboutMe>
            <BestProduct>
                <div className='container'>
                    <div className='title'>
                        <h1>Why Our Products is the Best</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque, blandit per eu
                            aliquet nascetur vulputate libero vestibulum, maecenas suspendisse iaculis quisque magnis
                            curabitur.</p>
                    </div>
                    <div className='content'>

                        <div className='contentContainer'>

                            <div className='contentBlock'>
                                <div className='number'>
                                    01
                                </div>
                                <div className='contentInfo'>
                                    <h1>Only natural ingredients</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per eu
                                        aliquet nascetur.</p>
                                </div>
                            </div>

                            <div className='contentBlock'>
                                <div className='number'>
                                    02
                                </div>
                                <div className='contentInfo'>
                                    <h1>Wide range of products</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per eu
                                        aliquet nascetur.</p>
                                </div>
                            </div>

                            <div className='contentBlock'>
                                <div className='number'>
                                    03
                                </div>
                                <div className='contentInfo'>
                                    <h1>Quality Certificates</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per eu
                                        aliquet nascetur.</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <Image src={images.icesplashitem5} alt="icesplashitem"/>
                        </div>
                        <div className='contentContainer'>

                            <div className='contentBlock'>
                                <div className='contentInfo'>
                                    <h1>Only fresh fruits</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per eu
                                        aliquet nascetur.</p>
                                </div>
                                <div className='number'>
                                    04
                                </div>
                            </div>

                            <div className='contentBlock'>
                                <div className='contentInfo'>
                                    <h1>Choose your flavor</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per eu
                                        aliquet nascetur.</p>
                                </div>
                                <div className='number'>
                                    05
                                </div>
                            </div>

                            <div className='contentBlock'>
                                <div className='contentInfo'>
                                    <h1>Made with love</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per eu
                                        aliquet nascetur.</p>
                                </div>
                                <div className='number'>
                                    06
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </BestProduct>
            <Review>
                <div className='ReviewContent'>
                    <h1>Reviews</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst curabitur interdum leo, nunc
                        aptent himenaeos convallis porttitor consequat placerat laoreet quisque molestie facilisis
                        mauris, sociosqu egestas magnis urna ultrices maecenas non litora aliquet dignissim. Metus quis
                        massa platea ultricies fermentum feugiat lectus.</p>
                    <span>John Doe</span>
                </div>
            </Review>
            <ChooseFlavor>
                <div>
                    <Image src={images.cakeItem7} alt='yourflavor'/>
                </div>
                <div className='ChooseContent'>
                    <h1>Choose Your Flavor</h1>
                    <p>Here you can independently assemble your ideal dessert that fully meets your preferences and
                        desires.</p>
                    <CustomButton>
                        <Link href="/">
                            Order now
                        </Link>
                    </CustomButton>
                </div>
            </ChooseFlavor>
            <CakePops>
                <div className='CakePopsContent'>
                    <h1>Cake Pops</h1>
                    <p>Delicate biscuit with juicy filling, covered with Belgian chocolate with any decor of your
                        choice.</p>
                    <CustomButton>
                        <Link href="/">
                            Order now
                        </Link>
                    </CustomButton>
                </div>
                <div>
                    <Image src={images.cakepops} alt='yourflavor'/>
                </div>
            </CakePops>
            <OurMenu>
                <div className='OurMenuContainer'>

                    <div className='OurMenuTitle'>
                        <h1>Our menu</h1>
                        <p>A variety of flavors and delicious desserts are waiting for you in our menu! We proudly offer
                            a
                            wide selection of fresh and delicious cupcakes, cakes and other gourmet sweets that are sure
                            to
                            win your heart and provide the most sophisticated taste experience.</p>
                    </div>
                    <div className='OurMenuContentContainer'>
                        <div className='OurMenuContent'>
                            <div>
                                <Image src={images.cakeItem2} alt='snikers'/>
                            </div>
                            <div>
                                <h1>
                                    “Snickers”
                                </h1>
                                <p>
                                    Сhocolate-nut filling that immerses you in a magical world. A blend of smooth peanut
                                    butter cream, sweet caramel and crunchy nuts strikes an unbeatable balance between
                                    softness and texture, bursting in your mouth with absolute bliss.
                                </p>
                            </div>
                        </div>

                        <div className='OurMenuContent'>
                            <div>
                                <Image src={images.cakeItem5} alt='Meringue cake'/>
                            </div>
                            <div>
                                <h1>
                                    Meringue cake
                                </h1>
                                <p>
                                    Meringue roll starts with a thin layer of fluffy and tender meringue, baked until
                                    golden
                                    brown. Its lightness and fragility create the perfect base for this dessert, giving
                                    it
                                    an elegant look. Then a luxurious layer of cream is applied to the meringue, which
                                    adds
                                    a rich and unique taste to the dessert.
                                </p>
                            </div>
                        </div>

                        <div className='OurMenuContent'>
                            <div>
                                <Image src={images.cakeItem3} alt='Honey'/>
                            </div>
                            <div>
                                <h1>
                                    "Honey"
                                </h1>
                                <p>
                                    "Honey cake" is a true work of art, combining delicate honey gingerbread and
                                    airy buttercream. Each layer of this cake is soaked in fragrant honey and
                                    creates the perfect combination of spiciness and sweetness.
                                </p>
                            </div>
                        </div>

                        <div className='OurMenuContent'>
                            <div>
                                <Image src={images.cakeItem6} alt='Cupcake'/>
                            </div>
                            <div>
                                <h1>
                                    Cupcake
                                </h1>
                                <p>
                                    Сupcakes are little pieces of joy that will win your heart with their flavors,
                                    textures
                                    and attractive appearance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <CustomButtonOurMenu>
                            <LinkOurMenu href="/">
                                Order now
                            </LinkOurMenu>
                        </CustomButtonOurMenu>
                    </div>
                </div>
            </OurMenu>
            <GalleryCarousel/>
            <Footer>
                <div className='contentContainer'>
                    <div className='title'>
                        <Image src={images.logowhite} alt='logowhite'/>
                        <p>Experience the Korean gastronomy with Susans Table at the comfort of your home.</p>
                        <div className='socialmedia'>
                            <Link href="https://www.instagram.com/sab_icake/">
                                <Image src={images.instagram} alt="instagram"/>
                            </Link>
                            <Link href="/">
                                <Image src={images.facebook} alt="facebook"/>
                            </Link>
                            <Link href="https://wa.me/972585001993">
                                <Image src={images.whatsapp} alt="whatsapp"/>
                            </Link>
                        </div>
                    </div>
                    <div className='linkWrapper'>
                        <div className='link'>
                            <p>Support</p>
                            <Link href=''>
                                Account
                            </Link>
                            <Link href=''>
                                Support
                            </Link>
                            <Link href=''>
                                Feedback
                            </Link>
                        </div>
                        <div className='link'>
                            <p>Quck Links</p>
                            <Link href="/">
                                Home
                            </Link>
                            <Link href="/">
                                Gallery
                            </Link>
                            <Link href="/">
                                Shop
                            </Link>
                            <Link href="/">
                                Portfolio
                            </Link>
                        </div>
                    </div>
                    <div className='contact'>
                        <span>Contact Us</span>
                        <p>
                            Israel, Haifa
                        </p>
                        <p>
                            Phone: +972 58-500-1993
                        </p>
                        <p>
                            Email: team@icelab.com
                        </p>
                    </div>
                </div>
                <div className='copyright'>
                    <p>SabCake © 2023 .All Rights Reserved.</p>
                </div>
            </Footer>
        </>
    )
}

export default Verstka

