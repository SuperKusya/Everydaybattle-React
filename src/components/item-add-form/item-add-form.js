import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {
    render() {
        return (
            <button 
                className="section__button addButton" 
                type="button"
                onClick={() => this.props.onItemAdded('Hello')}>
                Добавить квест
            </button>
        )
    }
    
}
