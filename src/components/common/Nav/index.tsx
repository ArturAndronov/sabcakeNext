import React, {FC, useState} from 'react';

import {
    AppBar,
    Badge,
    BadgeProps,
    Box,
    Button,
    IconButton,
    Stack,
    styled,
    Switch,
    Toolbar,
    Typography,
    Container
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "@mui/material/Link";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme} from "@/utils/theme";

import images from '../../../assets/image'
import Image from "next/image";

import {StyledBadge, LinkBox} from './style'

import { Translations } from './../../../pages/index';

interface NavProps {
    selectedLanguage: string;
    handleLanguageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    translations: Translations;
}

const theme = createTheme();
const Nav: FC<NavProps> = ({selectedLanguage, translations, handleLanguageChange }) => {


    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const languages = [
        {value: 'en', label: 'English'},
        {value: 'ru', label: 'Russian'},
        // Добавьте другие языки по желанию
    ];

// Получите текущий текст на основе выбранного языка
    const currentTranslations = translations[selectedLanguage];



    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClickMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        padding: "10px",
                        backdropFilter: 'saturate(180%) blur(20px)',
                    }}
                >
                        <Toolbar
                            style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: "0px 215px"
                        }}>
                            <Box>
                                <Link href="/" >
                                    <Image src={images.logo} alt="Logo" style={{marginRight: '10px'}}
                                           />
                                </Link>
                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <LinkBox>
                                    <Link href="/">{currentTranslations.home}</Link>
                                    <Link href="#gallerycarousel">{currentTranslations.gallery}</Link>
                                    <Link href="/shop">{currentTranslations.shop}</Link>
                                    <Link href="#portfolio">{currentTranslations.portfolio}</Link>
                                </LinkBox>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={2} color="secondary">
                                        <ShoppingCartIcon/>
                                    </StyledBadge>
                                </IconButton>
                                <Stack spacing={2} direction="row" alignItems="center">
                                    <Switch checked={isDarkTheme} onChange={handleThemeChange}/>
                                </Stack>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="default"
                                    aria-label="menu"
                                >
                                    <MenuIcon onClick={handleClickMenu}/>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openMenu}
                                        onClose={handleCloseMenu}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleCloseMenu}><Link href="#">Home</Link></MenuItem>
                                        <MenuItem onClick={handleCloseMenu}><Link href="#">Characters</Link></MenuItem>
                                        <MenuItem onClick={handleCloseMenu}><Link href="#">Logout</Link></MenuItem>
                                    </Menu>
                                </IconButton>
                                <TextField
                                    select
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                >
                                    {languages.map((language) => (
                                        <MenuItem key={language.value} value={language.value}>
                                            {language.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Nav;
