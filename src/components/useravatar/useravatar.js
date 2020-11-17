import React from 'react';
import './_useravatar.scss';

const UserAvatar = ( { avatar } ) => {
    return (
        <div className="card__label-image">
            <img src={avatar} alt="аватар" className="card__avatar"></img>
        </div>
        
    ) 
}

export default UserAvatar;