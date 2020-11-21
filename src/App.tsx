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
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      console.log(response.data.slip.advice);
    })
    .catch(error => { 
      console.log(error);
    });
  }

  render() {
    return (
      <h1>App</h1>
    )
  }
}

export default App;
