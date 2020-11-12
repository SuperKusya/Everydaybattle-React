import React from 'react';
import './item-add-form.css';

import ErrorLabel from '../errorlabel';

export default class ItemAddForm extends React.Component {

    state = {
        label: '',
        shown: false,
        isValid: true
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        let { shown, label } = this.state;
        e.preventDefault();

        if(!shown) {
            this.setState({
                shown: true
            });

            return;
        }

        if(shown && (label === '' || label.trim() === '')) {
            this.setState({
                isValid: false
            });

            return false;
        }

        this.props.onItemAdded(label);
        this.setState({
            isValid: true
        });

        this.setState({
            label: '',
        });
    };

    render() {
        let style = {
            display: 'none'
        };

        const { shown } = this.state;
       
        if (shown) {
            style = {
                display: 'block'
            };
        }

        let error;
        if (!this.state.isValid) {
            error = <ErrorLabel />
        }
        
        return (
            <div>
                { error }
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                            className="addInput"
                            onChange={this.onLabelChange}
                            placeholder="What needs to be done"
                            style={style}
                            value={this.state.label}
                    />
                    <button 
                        className="section__button addButton" 
                        type="submit"
                    >
                        Добавить квест
                    </button>
                </form>
            </div>
        )
    }
    
}
