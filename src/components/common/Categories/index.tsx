import React from 'react';
import { CategoriesContainer } from '@/components/common/Categories/style';

interface CategoriesProps {
    items: string[];
    onClickItem: (index: number | null) => void;
    activeCategory: null
}

const Categories: React.FC<CategoriesProps> = React.memo(({ activeCategory, items, onClickItem }) => {

    return (
        <CategoriesContainer>
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickItem(index)}
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