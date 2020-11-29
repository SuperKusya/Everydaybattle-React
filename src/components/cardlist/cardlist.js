import React from 'react';
import './_cardlist.scss';

import CardItem from '../carditem';


const CardList = ( {tasks, onDeleted} ) => {
    const elements = tasks.map((item) => {
        const { id, ...label } = item;

        return (
            <CardItem { ...label } 
                
                key={ id }
                onDeleted={ () => onDeleted(id) }
            />
        );
    });

    return (
        <ul className="card__list">
            { elements }
        </ul>
    )
    
}

export default CardList;