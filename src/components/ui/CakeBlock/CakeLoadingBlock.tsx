import React, {FC} from 'react'
import ContentLoader from "react-content-loader"

const CakeLoadingBlock: FC = () => {
    return (
        <>
            <ContentLoader
                speed={2}
                width={512}
                height={703}
                viewBox="0 0 512 703"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="226" cy="140" r="140"/>
                <rect x="80" y="290" rx="0" ry="0" width="303" height="34"/>
                <rect x="0" y="343" rx="10" ry="10" width="500" height="242"/>
                <rect x="0" y="610" rx="3" ry="3" width="91" height="34"/>
                <rect x="324" y="603" rx="25" ry="25" width="172" height="45"/>
            </ContentLoader>
        </>
    )
}

export default CakeLoadingBlock;