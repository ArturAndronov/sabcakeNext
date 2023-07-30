import React from 'react'
import {NextPage} from "next";
import axios from "axios";

import Layout from "@/components/common/Layout";
import Categories from "@/components/common/Categories";
import {ShopContainer} from "@/styles/shop";
import SortPopup from "@/components/ui/SortPopup";
import CakeBlock from "@/components/ui/CakeBlock";

import {setCakes} from "@/redux/actions/cakes";
import {useSelector, useDispatch} from "react-redux";
import {setCategory} from '../../redux/actions/filters'

const categoryNames = ['Торты', 'Краффины', 'Бенто торты']
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {
        name: 'цене',
        type: 'price'
    }, {
        name: 'алфавиту',
        type: 'alphabet'
    }]
const Shop: NextPage = () => {
    const dispatch = useDispatch();
    const items = useSelector(({cakes}) => cakes.items);


    React.useEffect(() => {
        axios.get('http://localhost:3001/cakes').then(({data}) => {
            dispatch(setCakes(data))
        });
    }, []);

    const onSelectCategory = React.useCallback((index: any) => {
        dispatch(setCategory(index))
    }, []);

    return (
        <>
            <Layout title={"Shop"} description={"taste your flavor"}>
                <ShopContainer>
                    <div className='nav'>
                        <Categories
                            onClickItem={onSelectCategory}
                            items={categoryNames}/>
                        <SortPopup
                            items={sortItems}/>
                    </div>

                    <h2 className='content__title'>Весь товар</h2>

                    <div className='content__items'>

                        {
                            items && items.map((obj: any) => (
                                <CakeBlock key={obj.id} {...obj}/>
                            ))
                        }

                    </div>
                </ShopContainer>
            </Layout>
        </>
    )
}

export default Shop;