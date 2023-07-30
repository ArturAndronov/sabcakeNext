import React from 'react';
import { CategoriesContainer } from '@/components/common/Categories/style';

interface CategoriesProps {
    items: string[];
    onClickItem: (index: number | null) => void;
}

const Categories: React.FC<CategoriesProps> = React.memo(({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState<number | null>(null);

    const onSelectItem = (index: number | null) => {
        setActiveItem(index);
        onClickItem(index);
    };
console.log("rerender cat")
    return (
        <CategoriesContainer>
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </CategoriesContainer>
    );
});

Categories.displayName = 'Categories';
export default Categories;