import React from 'react';
import './_userpoints.scss';

const UserPoints = ( { points = 0 } ) => {
    return (
        <div className="card__label-score">
            Поинты: <span className="card__score"> { points } </span>
        </div>
    )
}

export default UserPoints;