import React, { Component} from 'react';

class RouletteGun extends React.Component{
    constructor(props){
        super(props)
        this.state={chamber : null, spinningTheChamber: false}
    }
    static defaultProps = {bulletInChamber : 8}
    handleClick= ()=>{
        console.log('click work')
        this.setState({spinningTheChamber:true,})
        this.timeout=setTimeout(()=>{this.setState({chamber:Math.ceil(Math.random() * 8),
            spinningTheChamber: false })}
            ,2000         
        );
    }
    componentWillMount(){
        clearTimeout(this.timeout)
    }
    display (){
        console.log('dispay running')
        if(this.state.spinningTheChamber){
            return 'spinning the chamber and pulling the trigger! '
        }
        else if(this.state.chamber == this.props.bulletInChamber){
            return 'bang!!!'
        }
        else {return 'you are safe!'}
    }
    render(){
        return (<div>
            <p>{this.display()}</p>
            <button onClick={this.handleClick}>Pull the trigger!</button>
            
            
        </div>)
    }
}

export default RouletteGun;