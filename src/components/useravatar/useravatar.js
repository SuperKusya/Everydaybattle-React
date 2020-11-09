import React from 'react';
import './useravatar.css';

const UserAvatar = ( { avatar } ) => {
    return (
        <img src={avatar} alt="аватар" className="card__avatar"></img>
    ) 
}

export default UserAvatar;