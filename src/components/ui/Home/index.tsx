import { FC } from 'react';

import Layout from "@/components/common/Layout"

import { Wrapper } from './style';
import Header from '../Header';
import Categories from '../Categories/index';


import images from '../../../assets/image'
import Cake from '../Cake';
import { CakeProps } from '@/components/ui/Cake/cake';

let cakeList: CakeProps[] = [
  {
    name: "Торт 'Сникерс'",
    img: images.cakeItem2,
    price: 300,
  },
  {
    name: "Торт 'Медовик'",
    img: images.cakeItem3,
    price: 224,
  },
  {
    name: "Торт 'Наполеон'",
    img: images.cakeItem4,
    price: 187,
  },
  {
    name: "Меренговый рулет",
    img: images.cakeItem5,
    price: 231,
  },
  {
    name: "Капкейки",
    img: images.cakeItem6,
    price: 151,
  },
]

const Home: FC = () => {
  return (
    <Layout title='Home'
      description="best cake in Israel"
    >
      <Wrapper bg="#fff">
        <Header />
        <main className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories items={['Торты', 'Краффины', 'Бенто торты']} />
              <div className='sort'>
                <div className='sort__label'>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                  <b>Сортировка по:</b>
                  <span>популярности</span>
                </div>
                <div className='sort__popup'>
                  <ul>
                    <li className='active'>популярности</li>
                    <li>цене</li>
                    <li>алфавиту</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className='content__title'>Весь товар</h2>
            <div className='content__items'>
              {cakeList &&
                cakeList.map((cake: CakeProps, index: number) => (
                  <Cake
                    key={`${cake.name}_${index}`}
                    name={cake.name}
                    img={cake.img}
                    price={cake.price}
                  />
                )
                )}
            </div>
          </div>
        </main>
      </Wrapper>
    </Layout>
  )
}

export default Home;