import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            datetime: new Date()
        }
      }
      componentDidMount(){
        console.log('componentDidMount')

          this.interval = setInterval(()=>{    

              this.setState({datetime: new Date()})},1000)
      }
      componentWillMount(){
          clearInterval(this.interval)
      }
  render() {
     
    return <div>{this.state.datetime.toLocaleString()}</div>
  }
}

export default TheDate