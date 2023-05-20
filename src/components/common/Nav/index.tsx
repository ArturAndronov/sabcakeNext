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


const StyledBadge = styled(Badge)<BadgeProps>(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const theme = createTheme();
const Nav: FC = () => {

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
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const handleLanguageChange = (event: any) => {
        setSelectedLanguage(event.target.value);
    };


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
                    sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                    style={{
                        backdropFilter: 'saturate(180%) blur(20px)',
                    }}
                >
                    <Container fixed>
                        <Toolbar>

                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                News
                            </Typography>
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
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2}}
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
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Nav;