import React from 'react';
import './carditem.css';

// деструктуризация
const cardItem = ( { label } ) => {
    console.log(label)
    return (
        <span className='carditem'> { label } </span>
    )
}

export default cardItem;

// const cardItem = ( props ) => {
//     return (
//         <span> { props.label } </span>
//     )
// }