import React from 'react';

import './app.css';

import Card from '../card';
import TextField from '../textfield';
import Button from '../button';

const App = ( ) => {

const data = {
    users: [
        {
            id: 1,
            name: "Kusya",
            points: 10,
            tasks: [
                {
                    id: 1,
                    label: "1"
                }
            ]
        },
        {
            id: 1,
            name: "Arthur",
            points: 10,
            tasks: [
                {
                    id: 1,
                    label: "1" 
                }
            ]
        }
    ]
}



const users = data['users'];

 return (
    <div>
        <Card users={users} />
        <TextField />
        <Button />
    </div>
     
 )
}

export default App;