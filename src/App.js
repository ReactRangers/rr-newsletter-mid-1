import React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  name: string,
}

export default class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  sayHello() {
    // NOTE this implementation may be quite large and needs to stay in a separate function
    alert(`Hello from ${this.props.name}!`);
  }

  handleClick() {
    alert(`Hello from ${this.props.name}!`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.sayHello.bind(this)}>Say Hello #1</button>
        <button onClick={e => this.sayHello(e)}>Say Hello #2</button>
        <button onClick={this.handleClick}>Say Hello #3</button>
      </div>
    );
  }
}
