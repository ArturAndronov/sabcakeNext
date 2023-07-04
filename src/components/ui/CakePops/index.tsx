import React, {FC} from 'react'
import Image from "next/image";
import images from "@/assets/image";
import {CustomButton} from "@/components/ui/Header/style";
import Link from "@mui/material/Link";
import {CakePopsContainer} from "@/components/ui/CakePops/style";


const CakePops: FC = () => {
    return (
        <>
            <CakePopsContainer>
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
            </CakePopsContainer>
        </>
    )
}

export default CakePops;