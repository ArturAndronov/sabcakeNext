import {NextPage} from "next";


import Nav from "@/components/common/Nav";
import Header from "@/components/ui/Header";
import Footer from "@/components/common/Footer";
import BestProduct from "@/components/ui/BestProduct";
import Review from "@/components/ui/Review";
import ChooseFlavor from "@/components/ui/ChooseFlavor";
import CakePops from "@/components/ui/CakePops";
import OurMenu from "@/components/ui/OurMenu";
import GalleryCarousel from "@/components/ui/GalleryCarousel/GalleryCarousel";
import AboutMe from "@/components/ui/AboutMe";
import Layout from "@/components/common/Layout";


const HomePage: NextPage = () => {
    return (
        <>
            <Layout title={"HomePage"} description={"best cake"}>
            <Header />
            <AboutMe/>
            <BestProduct/>
            <Review/>
            <ChooseFlavor/>
            <CakePops/>
            <OurMenu/>
            <GalleryCarousel/>
            </Layout>

        </>
    )
}

export default HomePage;
