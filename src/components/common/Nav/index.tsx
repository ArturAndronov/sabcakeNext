import React, {FC, useState} from 'react';

import {
    IconButton,
    useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "@mui/material/Link";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme} from "@/utils/theme";

import images from '../../../assets/image'
import Image from "next/image";

import {StyledBadge, NavContainer} from './style'


const theme = createTheme();
const Nav: FC = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClickMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const isMobile = useMediaQuery('(max-width: 768px)'); // Проверка на мобильное устройство

    return (
        <>
            <NavContainer>
                <div className='container'>
                    <div className="logo">
                        <Image
                            src={images.logo}
                            alt="Logo"
                        /></div>

                    <div className="menu">
                        {!isMobile && (
                            <div>
                                <Link href="/">Home</Link>
                                <Link href="#gallerycarousel">Gallery</Link>
                                <Link href="/shop">Shop</Link>
                                <Link href="#portfolio">Portfolio</Link>
                            </div>
                        )}
                        <div className="mobile__menu">
                            {isMobile && (
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="default"
                                    aria-label="menu"
                                    onClick={handleClickMenu}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            )}

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleCloseMenu}>
                                    <Link href="/">Home</Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseMenu}>
                                    <Link href="#gallerycarousel">Gallery</Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseMenu}>
                                    <Link href="/shop">Shop</Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseMenu}>
                                    <Link href="#portfolio">Portfolio</Link>
                                </MenuItem>
                            </Menu>
                            <div>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={2} color="error">
                                        <ShoppingCartIcon/>
                                    </StyledBadge>
                                </IconButton>
                            </div>
                           <div>
                               {/*<TextField*/}
                               {/*    select*/}
                               {/*    value={selectedLanguage}*/}
                               {/*    onChange={handleLanguageChange}*/}
                               {/*>*/}
                               {/*    {languages.map((language) => (*/}
                               {/*        <MenuItem key={language.value} value={language.value}>*/}
                               {/*            {language.label}*/}
                               {/*        </MenuItem>*/}
                               {/*    ))}*/}
                               {/*</TextField>*/}
                           </div>

                        </div>
                    </div>


                </div>
            </NavContainer>
        </>
    )
}

export default Nav;
