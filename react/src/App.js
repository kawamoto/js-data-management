import React, { Component } from 'react';
import './App.css';

class App extends Component {
  storage = localStorage || window.localStorage;
  source = 'https://jsonplaceholder.typicode.com/todos/1';
  data = {};
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      duration: 0
    }
  }

  getData = () => {
    if (this.data) {
      this.setState({
        data: this.data
      });
      return;
    }
    var localData = this.fetchDataFromLocal();
    if (localData) {
      this.data = localData;
      this.setState({
        data: localData
      });
    } else {
      fetch(this.source)
      .then(res => res.json())
      .then(
        (result => {
          this.data = result;
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

  getDataFromMemory = () => {
    var start = performance.now()
    this.setState({
      data: this.data
    });
    var end = performance.now()
    var diff = end - start
    this.setState({
      duration: diff
    })
    return;
  }

  getDataFromLocal = () => {
    var start = performance.now()
    var localData = this.fetchDataFromLocal();
    this.data = localData;
    this.setState({
      data: localData
    });
    var end = performance.now()
    var diff = end - start
    this.setState({
      duration: diff
    })
  }

  fetchDataFromLocal = () => {
    return JSON.parse(this.storage.getItem(this.source));
  }

  getDataFromRemote = () => {
    var start = performance.now()
    this.fetchDataFromRemote().then(
      (result => {
        this.data = result;
        this.storage.setItem(this.source, JSON.stringify(result));
        this.setState({
          data: result
        });

      }
      ),
      (_error => {
        this.setState({
          data: {}
        });
      })).finally(() => {
        var end = performance.now()
        var diff = end - start
        this.setState({
          duration: diff
        })
      })
  }

  fetchDataFromRemote = () => {
    return fetch(this.source).then(res => res.json())
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getData}>Get Data</button>
        <button onClick={this.getDataFromMemory}>Get Data from memory</button>
        <button onClick={this.getDataFromLocal}>Get Data from local</button>
        <button onClick={this.getDataFromRemote}>Get Data from remote</button>
        <ul>
          <li>id: {this.state.data.id}</li>
          <li>title: {this.state.data.title}</li>
        </ul>
        <div>
          duration: {this.state.duration} ms
        </div>
      </div>
    );
  }
}

export default App;
