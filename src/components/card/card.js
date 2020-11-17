import React from 'react';
import './_card.scss';

import UserName from '../username/username';
import UserPoints from '../userpoints/userpoints';
import UserAvatar from '../useravatar/useravatar';
import CardList from '../cardlist/cardlist';

 
const Card = ( { user, onDeleted } ) => {
    const { name, points, avatar, tasks, id } = user;
    return (
        <div className="card">
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
