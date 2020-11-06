import React from 'react';
import './card.css';

import UserName from '../username/username';
import UserPoints from '../userpoints/userpoints';
import CardList from '../cardlist/cardlist';

 
const Card = ( props ) => {
    const cards = props.users.map((user) => {
        return (
            <div>
                <UserName name = {user.name} />
                <UserPoints points = {user.points} />
                <CardList tasks = {user.tasks} />
            </div>
        )
    })
  
    return (
        <div className="section">
            { cards }
        </div>
    )
}


export default Card;
