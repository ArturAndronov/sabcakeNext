import React from 'react'
import {NextPage} from "next";
import axios from "axios";

import Layout from "@/components/common/Layout";
import Categories from "@/components/common/Categories";
import {ShopContainer} from "@/styles/shop";
import SortPopup from "@/components/ui/SortPopup";
import CakeBlock from "@/components/ui/CakeBlock";

import {fetchCakes} from "@/redux/actions/cakes";
import {useSelector, useDispatch} from "react-redux";
import {setCategory, setSortBy} from '../../redux/actions/filters'
import CakeLoadingBlock from "@/components/ui/CakeBlock/CakeLoadingBlock";

const categoryNames = ['Торты', 'Краффины', 'Бенто торты']
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {
        name: 'цене',
        type: 'price',
        order: 'asc'
    }, {
        name: 'алфавиту',
        type: 'name',
        order: 'asc'
    }]
const Shop: NextPage = () => {
    const dispatch = useDispatch();
    const items = useSelector(({cakes}) => cakes.items);
    const isLoaded = useSelector(({cakes}) => cakes.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);


    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchCakes(sortBy, category))
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index: any) => {
        dispatch(setCategory(index))
    }, []);

    const onClickSortType = React.useCallback((type: any) => {
        dispatch(setSortBy(type))
    }, []);

    return (
        <>
            <Layout title={"Shop"} description={"taste your flavor"}>
                <ShopContainer>
                    <div className='nav'>
                        <Categories
                            activeCategory={category}
                            onClickItem={onSelectCategory}
                            items={categoryNames}/>
                        <SortPopup
                            activeSortType={sortBy.type}
                            items={sortItems}
                            onClickSortType={onClickSortType}
                        />

                    </div>

                    <h2 className='content__title'>Весь товар</h2>

                    <div className='content__items'>

                        {
                            isLoaded
                                ? items.map((obj: any) => <CakeBlock key={obj.id} isLoading={true} {...obj} />)
                                : Array(5).fill(0).map((_, index) => <CakeLoadingBlock key={index}/>)
                        }

                    </div>
                </ShopContainer>
            </Layout>
        </>
    )
}

export default Shop;