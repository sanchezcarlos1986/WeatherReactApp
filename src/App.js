import React, { Component } from 'react';
import Button from './UI/Button'

class App extends Component {
  constructor(){
    super()

    this.state = { title: 'Clickea un botón' }
  }

  onLogin = e => {
    console.log(`Click: ${e.target.innerText}`)

    this.setState({
      title: e.target.innerText
    })
  }
  
  render() {
    const { title } = this.state
    return (
      <div className="App">
        <h1>{title}</h1>
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
