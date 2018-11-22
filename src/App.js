import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{name: 'Chris', age: 34 }, {name: 'John', age: 30 }, {name: 'Mike', age: 26 }], otherState: 'ANOTHER VALUE'
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS - this.state.persons[0].name = 'HELLO'; - IT WONT WORK
    this.setState({ persons: [{name: newName, age: 1 }, {name: 'www', age: 2 }, {name: 'eee', age: 3 }]  })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={ () =>  this.switchNameHandler() }>Switch Name</button>
        <Person 
        name={ this.state.persons[0].name } 
        age={ this.state.persons[0].age } 
        click={ this.switchNameHandler.bind(this, 'CHRIS!!!')  }>My hobbies: Football</Person>

        <Person 
        name={ this.state.persons[1].name } 
        age={ this.state.persons[1].age }
        click={ this.switchNameHandler.bind(this, 'OLIVIA')  }>Hello!</Person>

        <Person 
        name={ this.state.persons[2].name } 
        age={ this.state.persons[2].age } 
        click={ this.switchNameHandler.bind(this, 'SERGAY')  }>I like stuff</Person>
      </div>
    );

    // Another example
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work?'))

  }
}

export default App;
