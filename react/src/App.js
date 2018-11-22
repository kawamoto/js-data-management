import React, { Component } from 'react';
import './App.css';

class App extends Component {
  storage = localStorage || window.localStorage;
  source = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  getData = () => {
    var localData = this.fetchDataFromLocal();
    if (localData) {
      this.setState({
        data: localData
      });
    } else {
      fetch(this.source)
      .then(res => res.json())
      .then(
        (result => {
          this.storage.setItem(this.source, JSON.stringify(result));
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
  }

  getDataFromLocal = () => {
    this.setState({
      data: this.fetchDataFromLocal()
    });
  }

  fetchDataFromLocal = () => {
    return JSON.parse(this.storage.getItem(this.source));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getData}>Get Data</button>
        <button onClick={this.getDataFromLocal}>Get Data from local</button>
        <ul>
          <li>id: {this.state.data.id}</li>
          <li>title: {this.state.data.title}</li>
        </ul>
      </div>
    );
  }
}

export default App;
