import React from 'react'
import {NextPage} from "next";
import Layout from "@/components/common/Layout";
import Categories from "@/components/common/Categories";
import Image from "next/image";
import images from "@/assets/image";
import {ShopContainer} from "@/styles/shop";
import SortPopup from "@/components/ui/SortPopup";


const Shop: NextPage = () => {

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
                        <div className='cake-block'>
                            <Image
                                className='cake-block_image'
                                src={images.cakeItem2}
                                alt='cake'
                            />
                            <h4 className='cake-block__title'>Торт Сникерс</h4>
                            <div className='cake-block__selector'>
                                <div>Бисквит:</div>
                                <ul>
                                    <li className='active'>ванильный</li>
                                    <li>шоколадный</li>
                                    <li>апельсиновый</li>
                                    <li>кокосовый</li>
                                    <li>морковный</li>
                                    <li>красный бархат</li>
                                </ul>
                                <div>Начинки:</div>
                                <ul>
                                    <li className='active'>клубника</li>
                                    <li>вишня</li>
                                    <li>чёрная смородина</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>манго-маракуйя</li>
                                    <li>апельскиновый курд</li>
                                    <li>апельсиновая карамель</li>
                                    <li>карамелизированный банан</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>классическая</li>
                                    <li>солёная</li>
                                </ul>
                            </div>
                            <div className='cake-block__bottom'>
                                <div className='cake-block__price'>от 300₪</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Добавить</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div>


                        <div className='cake-block'>
                            <Image
                                className='cake-block_image'
                                src={images.cakeItem3}
                                alt='cake'
                            />
                            <h4 className='cake-block__title'>Медовик</h4>
                            <div className='cake-block__selector'>
                                <div>Бисквит:</div>
                                <ul>
                                    <li className='active'>ванильный</li>
                                    <li>шоколадный</li>
                                    <li>апельсиновый</li>
                                    <li>кокосовый</li>
                                    <li>морковный</li>
                                    <li>красный бархат</li>
                                </ul>
                                <div>Начинки:</div>
                                <ul>
                                    <li className='active'>клубника</li>
                                    <li>вишня</li>
                                    <li>чёрная смородина</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>манго-маракуйя</li>
                                    <li>апельскиновый курд</li>
                                    <li>апельсиновая карамель</li>
                                    <li>карамелизированный банан</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>классическая</li>
                                    <li>солёная</li>
                                </ul>
                            </div>
                            <div className='cake-block__bottom'>
                                <div className='cake-block__price'>от 220₪</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Добавить</span>
                                    <i>1</i>
                                </div>
                            </div>
                        </div>


                        <div className='cake-block'>
                            <Image
                                className='cake-block_image'
                                src={images.cakeItem4}
                                alt='cake'
                            />
                            <h4 className='cake-block__title'>Наполеон</h4>
                            <div className='cake-block__selector'>
                                <div>Бисквит:</div>
                                <ul>
                                    <li className='active'>ванильный</li>
                                    <li>шоколадный</li>
                                    <li>апельсиновый</li>
                                    <li>кокосовый</li>
                                    <li>морковный</li>
                                    <li>красный бархат</li>
                                </ul>
                                <div>Начинки:</div>
                                <ul>
                                    <li className='active'>клубника</li>
                                    <li>вишня</li>
                                    <li>чёрная смородина</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>манго-маракуйя</li>
                                    <li>апельскиновый курд</li>
                                    <li>апельсиновая карамель</li>
                                    <li>карамелизированный банан</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>классическая</li>
                                    <li>солёная</li>
                                </ul>
                            </div>
                            <div className='cake-block__bottom'>
                                <div className='cake-block__price'>от 270₪</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Добавить</span>
                                    <i>1</i>
                                </div>
                            </div>
                        </div>

                        <div className='cake-block'>
                            <Image
                                className='cake-block_image'
                                src={images.cakeItem5}
                                alt='cake'
                            />
                            <h4 className='cake-block__title'>Меренговый рулет</h4>
                            <div className='cake-block__selector'>
                                <div>Бисквит:</div>
                                <ul>
                                    <li className='active'>ванильный</li>
                                    <li>шоколадный</li>
                                    <li>апельсиновый</li>
                                    <li>кокосовый</li>
                                    <li>морковный</li>
                                    <li>красный бархат</li>
                                </ul>
                                <div>Начинки:</div>
                                <ul>
                                    <li className='active'>клубника</li>
                                    <li>вишня</li>
                                    <li>чёрная смородина</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>манго-маракуйя</li>
                                    <li>апельскиновый курд</li>
                                    <li>апельсиновая карамель</li>
                                    <li>карамелизированный банан</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>классическая</li>
                                    <li>солёная</li>
                                </ul>
                            </div>
                            <div className='cake-block__bottom'>
                                <div className='cake-block__price'>от 270₪</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Добавить</span>
                                    <i>1</i>
                                </div>
                            </div>
                        </div>

                        <div className='cake-block'>
                            <Image
                                className='cake-block_image'
                                src={images.cakeItem6}
                                alt='cake'
                            />
                            <h4 className='cake-block__title'>Капкейки</h4>
                            <div className='cake-block__selector'>
                                <div>Бисквит:</div>
                                <ul>
                                    <li className='active'>ванильный</li>
                                    <li>шоколадный</li>
                                    <li>апельсиновый</li>
                                    <li>кокосовый</li>
                                    <li>морковный</li>
                                    <li>красный бархат</li>
                                </ul>
                                <div>Начинки:</div>
                                <ul>
                                    <li className='active'>клубника</li>
                                    <li>вишня</li>
                                    <li>чёрная смородина</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>манго-маракуйя</li>
                                    <li>апельскиновый курд</li>
                                    <li>апельсиновая карамель</li>
                                    <li>карамелизированный банан</li>
                                    <li>ягодный микс</li>
                                </ul>
                                <ul>
                                    <li className='active'>классическая</li>
                                    <li>солёная</li>
                                </ul>
                            </div>
                            <div className='cake-block__bottom'>
                                <div className='cake-block__price'>от 270₪</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Добавить</span>
                                    <i>1</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </ShopContainer>
            </Layout>
        </>
    )
        ;
};
export default Shop;