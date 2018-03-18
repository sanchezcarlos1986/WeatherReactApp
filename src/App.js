import React, { Component } from 'react';
import Button from './Button'

class App extends Component {
  onLogin = () => {
    console.log('Click!!!!')
  }
  
  render() {
    return (
      <div className="App">
        <Button onClick={this.onLogin} text='Click me'></Button>
        <Button primary onClick={this.onLogin} text='Click me 2'></Button>
      </div>
    );
  }
}

export default App;
