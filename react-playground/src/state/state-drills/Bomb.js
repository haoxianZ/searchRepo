import React, {Component} from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state ={count : 0}
      }
      componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({count : this.state.count +1})},1000)
        console.log('componentDidMount')}
        componentWillMount(){
            clearInterval(this.interval)
        }
      renderDisplay(){
          const COUNT = this.state.count
          console.log(COUNT)
          if(COUNT>= 8){return 'Boom!'}
          else if(COUNT %2 ===0){return 'tick'}
          else {return 'tock'}
      }
  render() {
    
    return <div>{this.renderDisplay()}</div>
  }
};

export default Bomb