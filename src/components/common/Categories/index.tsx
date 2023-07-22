import React from 'react'
import {CategoriesContainer} from "@/components/common/Categories/style";
interface CategoriesProps {
    items: string[];
}
const Categories: React.FC<CategoriesProps> = ({ items }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index:any) => {
        setActiveItem(index);
    }

    return (
            <CategoriesContainer>
                <ul>
                    <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                    {items &&
                        items.map((name, index) => (
                            <li className={activeItem === index ? 'active' : ''}
                                onClick={() => onSelectItem(index)}
                                key={`${name}_${index}`}>{name}</li>
                        ))}
                </ul>
            </CategoriesContainer>
    )
}

export default Categories