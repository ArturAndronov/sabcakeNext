import { FC, PropsWithChildren } from "react"
import Meta from "@/components/seo/Meta"
import { IMeta } from "@/components/seo/meta.interface"
import Nav  from "@/components/common/Nav/index"
import Footer from "@/components/common/Footer";

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
    return (
        <Meta title={title} description={description}>
            <Nav />
            <main>{children}</main>
            <Footer/>
        </Meta>
    )
}

export default Layout