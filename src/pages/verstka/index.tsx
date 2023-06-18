import {Container, FirstBlock, Footer, FourBlock, Header, SecondBlock, ThirdBlock} from "@/styles";
import React from "react";

const Verstka = () => {
    return (
        <Container>
            <Header>
                <div className="logo"></div>
                <div className="menu">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </Header>
            <FirstBlock></FirstBlock>
            <SecondBlock></SecondBlock>
            <ThirdBlock></ThirdBlock>
            <FourBlock></FourBlock>
            <Footer></Footer>
        </Container>
    )
}

export default Verstka

