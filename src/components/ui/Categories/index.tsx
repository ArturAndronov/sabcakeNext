import { CategoriesProps } from './categories';
import React from 'react';
import { FC } from 'react';
import { CategoriesWrapper } from './style';



const Categories: FC<CategoriesProps> = ({ items }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index:any) => {
        setActiveItem(index);
    }

    return (
        <>
            <CategoriesWrapper>
                <ul>
                    <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                    {items &&
                        items.map((name:string, index:number) => (
                            <li className={activeItem === index ? 'active' : ''}
                                onClick={() => onSelectItem(index)}
                                key={`${name}_${index}`}>{name}</li>
                        ))}
                </ul>
            </CategoriesWrapper>
        </>
    )
}

export default Categories