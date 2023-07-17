import React, {FC} from 'react';

import {CustomButton, HeaderContainer} from "@/components/ui/Header/style";

import Link from "@mui/material/Link";



const Header: FC = () => {

    return (
        <>
                <HeaderContainer>
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
                </HeaderContainer>
        </>
    )
}

export default Header;
