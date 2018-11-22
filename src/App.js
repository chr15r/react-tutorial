import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Chris" age="34">My hobbies: Football</Person>
        <Person name="John" age="30">Hello!</Person>
        <Person name="Mike" age="26">I like stuff</Person>
      </div>
    );

    // Another example
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work?'))

  }
}

export default App;
