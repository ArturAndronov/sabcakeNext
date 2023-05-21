import {NextPage} from "next";

import Home from "@/components/ui/Home";

import Nav from "@/components/common/Nav";
import Header from "@/components/ui/Header";

const HomePage: NextPage = () => {

    return (
        <>
            <Nav />
            <Header />
            <Home/>
        </>
    )
}

export default HomePage;
