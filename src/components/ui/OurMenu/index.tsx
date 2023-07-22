import React, {FC} from 'react'
import images from "@/assets/image";
import Image from "next/image";

import {CustomButtonOurMenu, LinkOurMenu,OurMenuContainer} from "@/components/ui/OurMenu/style";

const OurMenu: FC = () => {
    return (
        <>
            <OurMenuContainer>
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
                                    &quot;Snickers&quot;
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
                                    &quot;Honey&quot;
                                </h1>
                                <p>
                                    &quot;Honey cake&quot; is a true work of art, combining delicate honey gingerbread and
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
            </OurMenuContainer>
        </>
    )
}

export default OurMenu;