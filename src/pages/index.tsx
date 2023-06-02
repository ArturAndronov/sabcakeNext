import {NextPage} from "next";

import AboutMe from "../components/ui/AboutMe";

import Nav from "@/components/common/Nav";
import Header from "@/components/ui/Header";
import Footer from "@/components/common/Footer";
import BestProduct from "@/components/ui/BestProduct";
import Review from "@/components/ui/Review";

const HomePage: NextPage = () => {

    return (
        <>
            <Nav />
            <Header />
            <AboutMe/>
            <BestProduct/>
            <Review />
            <Footer/>
        </>
    )
}

export default HomePage;
