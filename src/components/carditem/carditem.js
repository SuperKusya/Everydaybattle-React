import React from 'react';
import './_carditem.scss';

import AppService from '../../services';

export default class cardItem extends React.Component {

    appService = new AppService();

    constructor() {
        super();

        this.state = {
            done: false
        }
    }

    render() {
        const { label, id, onDeleted } = this.props; 

        return (
            <label key={id} className="card__item" >
                <input type="checkbox" onClick={ onDeleted } />
                <span> {label} </span>
            </label>
        )   
    }
}
