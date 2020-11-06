import React from 'react';
import './userpoints.css';

const UserPoints = ( { points = 0 } ) => {
    return (
        <div className="card__score-label">
            Поинты: <span className="card__score"> { points } </span>
        </div>
    )
}

export default UserPoints;