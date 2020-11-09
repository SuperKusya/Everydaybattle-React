import React from 'react';
import './carditem.css';

// деструктуризация
export default class cardItem extends React.Component {

    constructor() {
        super();

        this.state = {
            done: false
        }

        // this.onLabelClick = () => {
        //     console.log(`${this.props.label}`);
        // };
        // onClick = { this.onLabelClick }
    }

    render() {
        const { label, id, onDeleted } = this.props; 

        return (
            <label key={id}>
                <input type="checkbox" className="card__item" onClick={ onDeleted } />
                <span> {label} </span>
            </label>
        )   
    }
}
