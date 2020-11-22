import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    advice: ''
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const id = Math.floor( Math.random() * 217);
    console.log(id);
    axios.get(`https://api.adviceslip.com/advice/${id}`)
    .then(response => {
      const data = JSON.parse(response.data + '}');
      const { advice }  = data.slip;
      this.setState({advice});
    })
    .catch(error => { 
      console.log(error);
      this.setState({advice: 'There was an error :('});
    });
  }

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{ advice }</h1>
          <button className="button" onClick={this.fetchAdvice}>
              <span >Give me advice!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App;
