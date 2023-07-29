import React from 'react'
import {NextPage} from "next";
import axios from "axios";
import {connect} from "react-redux";

import Layout from "@/components/common/Layout";
import Categories from "@/components/common/Categories";
import {ShopContainer} from "@/styles/shop";
import SortPopup from "@/components/ui/SortPopup";
import CakeBlock from "@/components/ui/CakeBlock";


import {setCakes} from "@/redux/actions/cakes";

interface ShopProps {
    cakes: any[]; // Replace 'any[]' with the actual type of 'cakes' in your Redux store.
    setCakes: (cakes: any[]) => void; // Replace 'any[]' with the actual type of 'cakes' in your Redux store.
}

// const Shop: NextPage = () => {
//
//
//
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setCakes(data.cakes)
//         });
//     }, []);

class Shop extends React.Component<ShopProps> {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setCakes(data.cakes);
        });
    }

    render() {
        const { cakes } = this.props;
    return (
        <>
            <Layout title={"Shop"} description={"taste your flavor"}>
                <ShopContainer>
                    <div className='nav'>
                        <Categories items={['Торты', 'Краффины', 'Бенто торты']}/>
                        <SortPopup
                            items={[{name: 'популярности', type: 'popular'}, {
                                name: 'цене',
                                type: 'price'
                            }, {
                                name: 'алфавиту',
                                type: 'alphabet'
                            }]}/>
                    </div>

                    <h2 className='content__title'>Весь товар</h2>

                    <div className='content__items'>

                        {
                            cakes.map((obj: any) => (
                                <CakeBlock key={obj.id} {...obj}/>
                            ))
                        }

                    </div>
                </ShopContainer>
            </Layout>
        </>
    )
        }
}

const mapStateToProps = (state: any) => {
    return {
        cakes: state.cakes.items,
        filters:state.filters
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return{
        setCakes: (cakes:any) => dispatch(setCakes(cakes))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);