import React, {FC} from 'react'

import Image from "next/image";
import images from "@/assets/image";
import {CustomButton} from "@/components/ui/Header/style";
import {ChooseFlavorContainer} from "@/components/ui/ChooseFlavor/style";
import Link from "@mui/material/Link";

const ChooseFlavor: FC = () => {
    return (
        <>
            <ChooseFlavorContainer>
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
            </ChooseFlavorContainer>
        </>
    )
}

export default ChooseFlavor;