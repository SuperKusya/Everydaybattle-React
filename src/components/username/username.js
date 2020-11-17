import React from 'react';
import './_username.scss';

const UserName = ( { name } ) => {
    return <div className="card__name"> { name } </div>
}

export default UserName;