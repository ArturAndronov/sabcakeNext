import { FC, PropsWithChildren } from "react"
import Meta from "@/components/seo/Meta"
import { IMeta } from "@/components/seo/meta.interface"

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
    return (
        <Meta title={title} description={description}>
            <main>{children}</main>
        </Meta>
    )
}

export default Layout