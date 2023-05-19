import Image from "next/image"
import { FC } from "react"

import { CakeProps } from "@/components/ui/Cake/cake"
import { CakeBlock } from "./style"
import Button from "@/components/common/Button"


const Cake: FC<CakeProps> = ({ name, img, price }) => {
    return (
        <CakeBlock className='cake-block'>
            <Image
                className='cake-block_image'
                src={img.src}
                alt={img.alt}
                width={350}
                height={350}
            />
            <h4 className='cake-block__title'>{name}</h4>
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
                <div className='cake-block__price'>от {price}₪</div>
                <Button className="button button--outline button--add">
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
                </Button>
            </div>
        </CakeBlock>
    )
}

export default Cake;