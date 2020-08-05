import React, {Component} from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        console.log('props in constructor', props)
        super(props)
        this.state ={who : 'World'}
    }
    handleButtonClick =()=>{
        console.log('state in handleButtonClick', this.state)
        this.setState({who: 'Wolrd'})
    }
    handleButtonClick1 =()=>{
        this.setState({who: 'Friend'})
    }
    handleButtonClick2 =()=>{
        console.log('state in handleButtonClick', this.state)
        this.setState({who: 'React'})
    }
    render() {
      return (
        <div>
          <p>Hello, {this.state.who}!</p>
          <button 
          onClick={this.handleButtonClick}>
            World
          </button>
          <button 
          onClick={this.handleButtonClick1}>
            Friend
          </button>
          <button 
          onClick={this.handleButtonClick2}>
            React
          </button>
        </div>
      )
    }
  }

  export default HelloWorld;