import React, {FC} from 'react'
import {Box, Typography} from "@mui/material";
import images from "@/assets/image";
import Image from "next/image";
import {ImageContainer} from "@/components/ui/AboutMe/style";

const BestProduct: FC = () => {
    return (
        <>
            <Box
                style={{
                    backgroundColor: '#fff',
                    height: '970px',
                }}>
                <Box style={{
                    padding: "100px 320px",
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingBottom: '40px',
                            maxWidth: '620px'
                        }}>
                        <Typography
                            style={{
                                borderBottom: "3px solid #C9A74D",
                                fontFamily: 'Rubik',
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "36px",
                                lineHeight: "43px",
                                paddingBottom: "25px",
                                textAlign: "center"
                            }}
                        >
                            Why Our Products is the Best
                        </Typography>
                        <Typography
                            style={{
                                padding: "25px 0px",
                                fontFamily: 'Quicksand',
                                fontWeight: "400",
                                fontSize: "18px",
                                textAlign: "center"
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                            blandit per eu aliquet nascetur vulputate libero vestibulum, maecenas suspendisse iaculis
                            quisque magnis curabitur.
                        </Typography>
                    </Box>
                    <Box style={{
                        display: 'flex',

                    }}>
                        <Box style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingRight: '20px',
                        }}>
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '70px'
                            }}>
                                <Box style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#FFFFFF",
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                }}>
                                    <Typography style={{
                                        fontFamily: 'Quicksand',
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "24px"
                                    }}>01</Typography>
                                </Box>
                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: "260px",
                                    paddingLeft: "25px"
                                }}>
                                    <Typography
                                        style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            lineHeight: "21px",
                                            paddingBottom: "17px",
                                        }}
                                    >
                                        Only natural ingredientss
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'Quicksand',
                                            fontWeight: "400",
                                            fontSize: "14px",
                                        }}>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per
                                        eu aliquet nascetur.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box style={{
                                display: 'flex',
                                paddingBottom: '70px'
                            }}>
                                <Box style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#FFFFFF",
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                }}>
                                    <Typography style={{
                                        fontFamily: 'Quicksand',
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "24px"
                                    }}>02</Typography>
                                </Box>
                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: "260px",
                                    paddingLeft: "25px"
                                }}>
                                    <Typography
                                        style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            lineHeight: "21px",
                                            paddingBottom: "17px",
                                        }}
                                    >
                                        Wide range of products
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'Quicksand',
                                            fontWeight: "400",
                                            fontSize: "14px",
                                        }}>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit per eu aliquet nascetur.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box style={{
                                display: 'flex'
                            }}>
                                <Box style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#FFFFFF",
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                }}>
                                    <Typography style={{
                                        fontFamily: 'Quicksand',
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "24px"
                                    }}>03</Typography>
                                </Box>
                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: "260px",
                                    paddingLeft: "25px"
                                }}>
                                    <Typography
                                        style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            lineHeight: "21px",
                                            paddingBottom: "17px",
                                        }}
                                    >
                                        Quality Certificates
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'Quicksand',
                                            fontWeight: "400",
                                            fontSize: "14px",
                                        }}>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit per eu aliquet nascetur.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <ImageContainer>
                            <Image src={images.icesplashitem5} alt="icesplashitem"/>
                        </ImageContainer>

                        <Box style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingRight: '20px',
                        }}>
                            <Box style={{
                                display: 'flex',
                                paddingBottom: '70px'
                            }}>

                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: "260px",
                                    paddingLeft: "25px"
                                }}>
                                    <Typography
                                        style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            lineHeight: "21px",
                                            paddingBottom: "17px",
                                        }}
                                    >
                                        Only fresh fruits
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'Quicksand',
                                            fontWeight: "400",
                                            fontSize: "14px",
                                        }}>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque, blandit per eu aliquet nascetur.
                                    </Typography>
                                </Box>
                                <Box style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#FFFFFF",
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                }}>
                                    <Typography style={{
                                        fontFamily: 'Quicksand',
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "24px"
                                    }}>04</Typography>
                                </Box>
                            </Box>

                            <Box style={{
                                display: 'flex',
                                paddingBottom: '70px'
                            }}>

                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: "260px",
                                    paddingLeft: "25px"
                                }}>
                                    <Typography
                                        style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            lineHeight: "21px",
                                            paddingBottom: "17px",
                                        }}
                                    >
                                        Choose your flavor
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'Quicksand',
                                            fontWeight: "400",
                                            fontSize: "14px",
                                        }}>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per
                                        eu aliquet nascetur.
                                    </Typography>
                                </Box>
                                <Box style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#FFFFFF",
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                }}>
                                    <Typography style={{
                                        fontFamily: 'Quicksand',
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "24px"
                                    }}>05</Typography>
                                </Box>
                            </Box>

                            <Box style={{
                                display: 'flex',
                            }}>

                                <Box style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: "260px",
                                    paddingLeft: "25px"
                                }}>
                                    <Typography
                                        style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            lineHeight: "21px",
                                            paddingBottom: "17px",
                                        }}
                                    >
                                        Made with love
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'Quicksand',
                                            fontWeight: "400",
                                            fontSize: "14px",
                                        }}>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit metus pellentesque,
                                        blandit
                                        per
                                        eu aliquet nascetur.
                                    </Typography>
                                </Box>
                                <Box style={{
                                    width: "65px",
                                    height: "65px",
                                    borderRadius: "50%",
                                    backgroundColor: "#000",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#FFFFFF",
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                }}>
                                    <Typography style={{
                                        fontFamily: 'Quicksand',
                                        fontStyle: "normal",
                                        fontWeight: "700",
                                        fontSize: "24px"
                                    }}>06</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default BestProduct;