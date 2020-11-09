import React from 'react';
import './card.css';

import UserName from '../username/username';
import UserPoints from '../userpoints/userpoints';
import UserAvatar from '../useravatar/useravatar';
import CardList from '../cardlist/cardlist';

 
const Card = ( { user, onDeleted } ) => {
    const { name, points, avatar, tasks, id } = user;
    return (
        <div className="section">
            <UserName name = { name } />
            <UserPoints points = { points } />
            <UserAvatar avatar= { avatar } />
            <CardList 
                tasks = { tasks }
                onDeleted={ (taskId) => onDeleted(id, taskId)} 
            />
        </div>
    )
}
  
export default Card;
