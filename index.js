import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName(){
    this.setState({ name: Math.random()});
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.changeName}> Change name</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
