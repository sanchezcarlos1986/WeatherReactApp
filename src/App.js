import React, { Component } from 'react';
import Button from './UI/Button'

class App extends Component {
  onLogin = () => {
    console.log('Click!!!!')
  }
  
  render() {
    return (
      <div className="App">
        <Button onClick={this.onLogin} text='Button'></Button>
        <Button primary onClick={this.onLogin} text='Button Primary'></Button>
        <Button success onClick={this.onLogin} text='Button Success'></Button>
        <Button warning onClick={this.onLogin} text='Button Warning'></Button>
        <Button danger onClick={this.onLogin} text='Button Danger'></Button>
      </div>
    );
  }
}

export default App;
