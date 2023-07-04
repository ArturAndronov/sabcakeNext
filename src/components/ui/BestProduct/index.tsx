import React, {FC} from 'react'
import images from "@/assets/image";
import Image from "next/image";

import {BestProductContainer} from "@/components/ui/BestProduct/style";

const BestProduct: FC = () => {
    return (
        <>
            <BestProductContainer>
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
            </BestProductContainer>
        </>
    )
}

export default BestProduct;