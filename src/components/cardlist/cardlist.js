import React from 'react';
import './cardlist.css';

import CardItem from '../carditem';


const CardList = ( props ) => {
    const elements = props.tasks.map((item) => {
        const { id, ...label } = item;

        return (
            <label key={id}>
                <input type="checkbox" className="card__item" />
                <CardItem { ...label } />
            </label>
        );
    });

    return (
        <ul>
            { elements }
        </ul>
    )
}

export default CardList;