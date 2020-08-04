import React, { Component } from 'react';
import Counter from './state/Counter';

class App extends Component {
  static defaultProps = {step:1}
  
  render() {
    return (

        <Counter step/>
    );
  }
}

export default App;
