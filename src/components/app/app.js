import React from 'react';

import './_app.scss';

import AppService from '../../services';

import Header from '../header';
import Card from '../card';
import ItemAddForm from '../item-add-form';

export default class App extends React.Component {
    appService = new AppService();
    maxId = 100;
    userIds = [1, 2];

    constructor() {
        super();
    }


    render() {
        const cards = this.userIds.map((userId) => {
            return (
                <Card
                    key={ userId }
                    userId={ userId }
                />
            )
        });
    
        return (
            <div className="page">
                <Header />
                
                <main className="main">
                    <div className="section">
                        <div className="section__cards">
                            { cards }
                        </div>
                        <ItemAddForm onItemAdded={this.addItem} />
                    </div>
                </main>
            </div>
        )
    }
}