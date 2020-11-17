import React from 'react';

import './_app.scss';

import Header from '../header';
import Card from '../card';
import ItemAddForm from '../item-add-form';

export default class App extends React.Component {

    maxId = 100;

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

                const newPoints = ++user.points
                newUser.points = newPoints;

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
        this.addItem = (text) => {
            //generate id (демонстрация работы Реакта, айди генерируются сервером)

            const newItem = {
                label: text,
                id: this.maxId++
            };

            this.setState(( { data } ) => {
                const { users } = data;

                const newUsers = users.map((user) => {
                    const { tasks } = user;
                    let newUser = {...user};

                    const newTasksArray = [
                        ...tasks,
                        newItem
                    ]

                    newUser.tasks = newTasksArray;

                    return newUser;
                })
            

                return {
                    data: {
                        users: newUsers
                    }
                }
            })

        }
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
        });
    
        return (
            <div>
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