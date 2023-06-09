import React, {FC} from 'react'
import {Box, Typography} from "@mui/material";
import images from "@/assets/image";
import Image from "next/image";

import {CustomButtonOurMenu, LinkOurMenu} from "@/components/ui/OurMenu/style";


const OurMenu: FC = () => {
    return (
        <>
            <Box
                style={{
                    backgroundImage: `url(${images.ourmenu.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '1157px',
                }}>
                <Box>
                    <Box style={{
                        paddingTop: "122px",
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Box
                            style={{
                                display: "flex",
                                flexDirection: 'column',
                                alignItems: 'center',
                                paddingBottom: '50px',
                                maxWidth: '620px'
                            }}>
                            <Typography
                                style={{
                                    borderBottom: "3px solid #C9A74D",
                                    color: "#fff",
                                    fontFamily: 'Rubik',
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    fontSize: "36px",
                                    lineHeight: "43px",
                                    paddingBottom: "25px",
                                    textAlign: "center"
                                }}
                            >
                                Our menu
                            </Typography>
                            <Typography
                                style={{
                                    paddingTop: '25px',
                                    fontFamily: 'Quicksand',
                                    color: "#fff",
                                    fontWeight: "400",
                                    fontSize: "18px",
                                    textAlign: "center"
                                }}>

                                A variety of flavors and delicious desserts are waiting for you in our menu! We proudly
                                offer a wide selection of fresh and delicious cupcakes, cakes and other gourmet sweets
                                that are sure to win your heart and provide the most sophisticated taste experience.
                            </Typography>
                        </Box>
                    </Box>
                    <Box style={{
                        padding: '0px 260px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        <LinkOurMenu href="/">
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '60px'
                            }}>
                                <Image src={images.cakeItem2} alt='cakepops' height={200} width={200}/>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        paddingLeft: "15px",
                                        maxWidth: '370px',
                                    }}>
                                    <Typography
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                        }}
                                    >
                                        "Snikers"
                                    </Typography>
                                    <Typography
                                        style={{
                                            padding: "25px 0px",
                                            fontFamily: 'Poppins',
                                            color: "#fff",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                        }}>
                                        Сhocolate-nut filling that immerses you in a magical world. A blend of smooth
                                        peanut butter cream, sweet caramel and crunchy nuts strikes an unbeatable
                                        balance between softness and texture, bursting in your mouth with absolute
                                        bliss.
                                    </Typography>
                                </Box>
                            </Box>
                        </LinkOurMenu>
                        <LinkOurMenu href="/">
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '60px'
                            }}>
                                <Image src={images.cakeItem5} alt='cakepops' height={200} width={200}/>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        paddingLeft: "15px",
                                        maxWidth: '370px'
                                    }}>
                                    <Typography
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                        }}
                                    >
                                        Meringue cake
                                    </Typography>
                                    <Typography
                                        style={{
                                            padding: "25px 0px",
                                            fontFamily: 'Poppins',
                                            color: "#fff",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                        }}>
                                        Meringue roll starts with a thin layer of fluffy and tender meringue, baked
                                        until golden brown. Its lightness and fragility create the perfect base for this
                                        dessert, giving it an elegant look.
                                        Then a luxurious layer of cream is applied to the meringue, which adds a rich
                                        and unique taste to the dessert.
                                    </Typography>
                                </Box>
                            </Box>
                        </LinkOurMenu>
                        <LinkOurMenu href="/">
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '60px'
                            }}>
                                <Image src={images.cakeItem3} alt='cakepops' height={200} width={200}/>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        paddingLeft: "15px",
                                        maxWidth: '370px'
                                    }}>
                                    <Typography
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                        }}
                                    >
                                        "Honey"
                                    </Typography>
                                    <Typography
                                        style={{
                                            padding: "25px 0px",
                                            fontFamily: 'Poppins',
                                            color: "#fff",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                        }}>
                                        "Honey cake" is a true work of art, combining delicate honey gingerbread and
                                        airy buttercream. Each layer of this cake is soaked in fragrant honey and
                                        creates the perfect combination of spiciness and sweetness.
                                    </Typography>
                                </Box>
                            </Box>
                        </LinkOurMenu>
                        <LinkOurMenu href="/">
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '60px'
                            }}>
                                <Image src={images.cakeItem6} alt='cakepops' height={200} width={200}/>
                                <Box
                                    style={{
                                        display: "flex",
                                        flexDirection: 'column',
                                        paddingLeft: "15px",
                                        maxWidth: '370px'
                                    }}>
                                    <Typography
                                        style={{
                                            color: "#fff",
                                            fontFamily: 'Poppins',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "24px",
                                            lineHeight: "36px",
                                        }}
                                    >
                                        Cupcake
                                    </Typography>
                                    <Typography
                                        style={{
                                            padding: "25px 0px",
                                            fontFamily: 'Poppins',
                                            color: "#fff",
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            lineHeight: "21px",
                                        }}>
                                        Сupcakes are little pieces of joy that will win your heart with their flavors, textures and attractive appearance.
                                    </Typography>
                                </Box>
                            </Box>
                        </LinkOurMenu>
                    </Box>
                    <Box style={{
                        padding: '90px 823px'
                    }}>
                        <CustomButtonOurMenu>
                            <LinkOurMenu href="/">
                                Order now
                            </LinkOurMenu>
                        </CustomButtonOurMenu>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default OurMenu;