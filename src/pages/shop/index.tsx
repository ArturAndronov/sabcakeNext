import React from 'react'
import {NextPage} from "next";
import axios from "axios";

import Layout from "@/components/common/Layout";
import Categories from "@/components/common/Categories";
import {ShopContainer} from "@/styles/shop";
import SortPopup from "@/components/ui/SortPopup";
import CakeBlock from "@/components/ui/CakeBlock";



const Shop: NextPage = () => {

    const [cakes, setCakes] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
           setCakes(data.cakes)
        });
    }, []);

    console.log(cakes);

    return (
        <>
            <Layout title={"Shop"} description={"taste your flavor"}>
                <ShopContainer>
                    <div className='nav'>
                        <Categories items={['Торты', 'Краффины', 'Бенто торты']}/>
                       <SortPopup items={['популярности','цене', 'алфавиту']}/>
                    </div>

                    <h2 className='content__title'>Весь товар</h2>

                    <div className='content__items'>

                        {
                            cakes.map((obj:any) => (
                                <CakeBlock key={obj.id} {...obj}/>
                            ))
                        }

                    </div>
                </ShopContainer>
            </Layout>
        </>
    )
        ;
};
export default Shop;