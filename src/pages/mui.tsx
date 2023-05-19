import React, { useState } from 'react'

import { Button, Stack, Switch, Typography, styled, CssBaseline, IconButton, Box, Rating, CardContent, CardActions, Card, BadgeProps, Badge, Avatar, Radio, FormControlLabel, FormControl, FormLabel, RadioGroup, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete'
import Link from '@mui/material/Link';

import { ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from './../utils/theme';


const Mui = () => {

    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );


    const MyCustomButton = styled(Button)(({ theme }) => ({
        padding: theme.spacing(4)
    }));

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const test = true;

    const [valueRadio, setValueRadio] = React.useState('female');

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueRadio((event.target as HTMLInputElement).value);
    };


    const [value, setValue] = React.useState<number | null>(null);

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    };


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className='App'>
                <Stack sx={{ bgcolor: 'myCustomColor.superLight' }} spacing={2} direction="row">
                    <Typography variant="myVariant">This is my app</Typography>
                    <Typography sx={{ color: "myCustomColor.superLight" }}> Hit the like button! </Typography>
                    <Button sx={{ p: 4, ml: "15px" }} color="secondary" variant='contained'> Hello from MUI v5 </Button>
                    <MyCustomButton variant='contained'> Custom button </MyCustomButton>
                </Stack>

                <Stack sx={{ mt: "50px" }} spacing={2} direction="row" alignItems="center">
                    <Typography variant="h3"> SX PROP</Typography>
                    <Button sx={[{
                        width: {
                            xs: 100,
                            sm: 200,
                            md: 300,
                            xl: 500
                        },
                        border: 5,
                        borderColor: "secondary.main"
                    },
                    test && {
                        border: 10,
                        borderColor: "primary.main"
                    }
                    ]} variant='contained'>Button 1</Button>
                    <Button variant='outlined'>Button 2</Button>
                </Stack>

                <Stack sx={{ mt: "30px" }} spacing={2} direction="row" alignItems="center">
                    <Typography variant="h3">Themes</Typography>
                    <Typography
                        variant="myVariant"
                        sx={{ color: "customRibRed.superLight", m: 2, p: 2 }}
                    >
                        Hello
                    </Typography>
                    <h3>Start editing to see some magic happen!</h3>
                    <Button sx={{ width: "200px" }} variant="contained" color="secondary">
                        hi
                    </Button>
                </Stack>

                <Stack sx={{ mt: "30px" }} spacing={2} direction="row" alignItems="center">
                    <Switch checked={isDarkTheme} onChange={handleThemeChange} />
                    <Typography variant="h1">Hello World!</Typography>
                    <Typography variant="body1">
                        This is an example of switching between light and dark themes using Material-UI.
                    </Typography>
                </Stack>

                <Stack sx={{ mt: "30px" }} spacing={2} direction="row" alignItems="center">
                    <KeyboardArrowLeftIcon sx={{ color: "red" }} fontSize='large' />
                    <IconButton>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                </Stack>

                <Box
                    sx={{
                        '& > legend': { mt: 2 }, bgcolor: "primary.main"
                    }}
                >
                    <Typography component="legend">Controlled</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <Typography component="legend">Read only</Typography>
                    <Rating name="read-only" value={value} readOnly />
                    <Typography component="legend">Disabled</Typography>
                    <Rating name="disabled" value={value} disabled />
                    <Typography component="legend">No rating given</Typography>
                    <Rating name="no-value" value={value} />
                </Box>

                <Box sx={{ ml: 30, minWidth: 275, maxWidth: 300 }}>
                    <Card variant="outlined">{card}</Card>
                </Box>

                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={2} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>


                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="./../assets/img/cakeItem2.png" sx={{ width: 35, height: 35 }} />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </Stack>


                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={valueRadio}
                        onChange={handleChangeRadio}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>


                <TableContainer sx={{ maxWidth: 950 }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>


                <Link href="/mui">Link</Link>
            </div>
        </ThemeProvider>
    )
}

export default Mui