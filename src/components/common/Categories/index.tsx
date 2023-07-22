import React from 'react'
interface CategoriesProps {
    items: string[];
}
const Categories: React.FC<CategoriesProps> = ({ items }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index:any) => {
        setActiveItem(index);
    }

    return (
        <div>
            <div className='categories'>
                <ul>
                    <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
                    {items &&
                        items.map((name, index) => (
                            <li className={activeItem === index ? 'active' : ''}
                                onClick={() => onSelectItem(index)}
                                key={`${name}_${index}`}>{name}</li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Categories