import React, {FC} from "react"
import Image from "next/image";
import {IcakeBlock} from "@/components/ui/CakeBlock/interface";
import {CakeBlockContainer} from "@/components/ui/CakeBlock/style";

import classNames from "classnames"


const CakeBlock: FC<IcakeBlock> = ({id, name, price, imageUrl, types, fillings, onClickAddCake, addedCount}) => {
    const availableTypes = ['ванильный', 'шоколадный', 'апельсиновый', 'кокосовый', 'морковный', 'красный бархат']
    const availableFilling = ["клубника", "вишня", "черная смородина", "ягодный микс", "манго-маракуйя", "апельсиновый курд", "апельсиновая карамель", "карамелизированный банан", "классическая карамель", "солёная карамель"]
    const [activeType, setActiveType] = React.useState(types[0])
    const [activeFilling, setActiveFilling] = React.useState(fillings[0])

    const OnSelectType = (index: any) => {
        setActiveType(index)
    };

    const OnSelectFilling = (index: any) => {
        setActiveFilling(index)
    };

    const onAddCake = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            filling: availableFilling[activeFilling], // Используйте числовое значение из массива
            type: availableTypes[activeType] // Используйте числовое значение из массива
        };
        onClickAddCake(obj)
    }


    return (
        <CakeBlockContainer>
            <div className='cake-block'>
                <Image
                    className='cake-block_image'
                    src={imageUrl}
                    alt='cake'
                    width={350} // Replace 200 with the actual width of your image
                    height={350}
                />
                <h4 className='cake-block__title'>{name}</h4>
                <div className='cake-block__selector'>
                    <div>Бисквит:</div>
                    <ul>
                        {availableTypes.map((type, index) => (
                            <li
                                key={type}
                                onClick={() => OnSelectType(index)}
                                className={classNames({
                                    active: activeType === index,
                                    disabled: !types.includes(index),
                                })}
                            >
                                {type}
                            </li>
                        ))}
                    </ul>
                    <div>Начинки:</div>
                    <ul>
                        {availableFilling.map((filling, index) => (
                            <li
                                key={filling}
                                onClick={() => OnSelectFilling(index)}
                                className={classNames({
                                    active: activeFilling === index,
                                    disabled: !fillings.includes(index),
                                })}
                            >
                                {filling}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='cake-block__bottom'>
                    <div className='cake-block__price'>от {price}₪</div>
                    <div onClick={onAddCake} className="button button--outline button--add">
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
                        {addedCount && <i>{addedCount}</i>}
                    </div>
                </div>
            </div>
        </CakeBlockContainer>
    )
}

export default CakeBlock;