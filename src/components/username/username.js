import React from 'react';
import './username.css';

const UserName = ( { name } ) => {
    return <div className="card__name"> { name } </div>
}

export default UserName;