import {NextPage} from "next";

import AboutMe from "../components/ui/AboutMe";

import Nav from "@/components/common/Nav";
import Header from "@/components/ui/Header";
import Footer from "@/components/common/Footer";
import BestProduct from "@/components/ui/BestProduct";
import Review from "@/components/ui/Review";
import ChooseFlavor from "@/components/ui/ChooseFlavor";
import CakePops from "@/components/ui/CakePops";
import OurMenu from "@/components/ui/OurMenu";
import GalleryCarousel from "@/components/ui/GalleryCarousel/GalleryCarousel";

const HomePage: NextPage = () => {

    return (
        <>
            <Nav />
            <Header />
            <AboutMe/>
            <BestProduct/>
            <Review />
            <ChooseFlavor />
            <CakePops />
            <OurMenu />
            <GalleryCarousel/>
            <Footer/>
        </>
    )
}

export default HomePage;
