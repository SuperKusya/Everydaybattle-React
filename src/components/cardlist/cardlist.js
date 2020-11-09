import React from 'react';
import './cardlist.css';

import CardItem from '../carditem';


const CardList = ( { tasks, onDeleted } ) => {
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
        <ul>
            { elements }
        </ul>
    )
}

export default CardList;