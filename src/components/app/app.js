import React from 'react';

import './app.css';

import Card from '../card';
import TextField from '../textfield';
import Button from '../button';

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            data: {
                users: [
                    {
                        id: 1,
                        name: "Arthur",
                        points: 6,
                        avatar: 'https://i.imgur.com/fnDuX3o.png',
                        tasks: [
                            {
                                id: 1,
                                label: "час Куси" 
                            }
                        ]
                    },
        
                    {
                        id: 2,
                        name: "Kusya",
                        points: 7,
                        avatar: 'https://i.imgur.com/7cKoHfP.png',
                        tasks: [
                            {
                                id: 2,
                                label: "кушать"
                            },
                            {
                                id: 3,
                                label: 'спать'
                            }
                        ],
                    }
                ]
            }
        };
        this.deleteItem = (userId, taskId) => {
            this.setState(({ data }) => {
                const { users } = data;

                const userInx = users.findIndex((el) => el.id === userId);
                const user = users[userInx];
                const { tasks } = user;
                const taskInx = tasks.findIndex((el) => el.id === taskId); 

                const newTasksArray = [ 
                    ...tasks.slice(0, taskInx), 
                    ...tasks.slice(taskInx + 1)
                ];
                let newUser = {...user};
                newUser.tasks = newTasksArray;

                const newUsersArray = [
                    ...users.slice(0, userInx),
                    newUser,
                    ...users.slice(userInx + 1)
                ];

                return {
                    data: {
                        users: newUsersArray
                    }
                }
            })
        };
    }

    render() {
        const users = this.state.data['users'];
        const cards = users.map((user) => {
            return (
                <Card 
                    user={ user } 
                    key={ user.id } 
                    onDeleted={ this.deleteItem }
                />
            )
        })
    
        return (
            <div>
                { cards }
                <TextField />
                <Button />
            </div>
        )
    }
}