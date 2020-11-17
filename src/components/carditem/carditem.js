import React from 'react';
import './_carditem.scss';

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
            <label key={id} className="card__item" >
                <input type="checkbox" onClick={ onDeleted } />
                <span> {label} </span>
            </label>
        )   
    }
}
