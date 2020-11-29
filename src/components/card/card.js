import React from 'react';
import './_card.scss';

import AppService from '../../services';

import UserName from '../username/username';
import UserPoints from '../userpoints/userpoints';
import UserAvatar from '../useravatar/useravatar';
import CardList from '../cardlist/cardlist';


// ( { user, onDeleted } )

export default class Card extends React.Component {
    appService = new AppService();
    
    state = {
        userId: this.props.userId,
        name: null,
        points: null,
        avatar: null,
        tasks: [],
    };

    constructor(props) {
        super(props);
        this.updateCard(this.props.userId);
    }

    deleteItem = (taskId) => {
        this.appService
        .deleteTask(taskId)
        .then((task) => {
            this.updateTasks(this.state.userId);
        });
    }

    updateTasks(userId) {
        this.appService
        .getUserTasks(userId)
        .then((tasks) => {
            this.setState({
                tasks: tasks,
            });
        });
    }

    updateCard(userId) {
        this.appService
        .getCard(userId)
        .then((card) => {
            this.setState({
                name: card.name,
                points: card.points,
                avatar: card.avatar,
                tasks: card.tasks,
            });
        });
    }

    render() {
        const { name, points, avatar, tasks } = this.state;
        return (
            <div className="card">
                <UserName name = { name } />
                <UserPoints points = { points } />
                <UserAvatar avatar= { avatar } />
                <CardList 
                    tasks = { tasks }
                    onDeleted = { this.deleteItem }
                />
            </div>
        )
    }
    
}



//   addItem = (text) => {
//     this.appService
//     .addTask(taskId)
//     .then((task) => {
//         this.updateTasks(this.state.userId);
//     });
// }
