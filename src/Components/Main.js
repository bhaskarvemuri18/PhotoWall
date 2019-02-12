import React, { Component } from 'react';
import List from './List'
import Title from './Title'

class Main extends Component {
    render() {
        return <div>
            <Title title={"To-dos"} />
            <List tasks={['Move the lawn', 'Walk the dog']} />
            <List tasks={['Hose driveway', 'Finish laundry']} />
        </div>
    }
}

export default Main