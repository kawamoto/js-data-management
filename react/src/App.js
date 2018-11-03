import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(
        (result => {
          this.setState({
            data: result
          });
        }),
        (error => {
          this.setState({
            data: {}
          });
        })
      )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getData}>Get Data</button>
        <ul>
          <li>id: {this.state.data.id}</li>
          <li>title: {this.state.data.title}</li>
        </ul>
      </div>
    );
  }
}

export default App;
