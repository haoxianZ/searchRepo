import React from 'react';
import './Accordion.css'
class Accordion extends React.Component {
    static defaultProps = {sections:[]};
    state ={currentTabIndex : null}
    handleClick (index){
        console.log('clikc')
        this.setState({currentTabIndex :index})
    }
    renderButtons (){
        return this.props.sections.map(
            (section,index)=>(<li className='item' key={index}><button 
            onClick={() => this.handleClick(index)}
            key={index}>
                {section.title}
            </button>
            {this.renderContent(index)}</li>))
            };
    renderContent (index) {
        const currentSection = this.props.sections[this.state.currentTabIndex];
        if( index === this.state.currentTabIndex){
            return (
            <p className='content'>
                {currentSection.content}
            </p>
        )
        }
        
    }
    render(){
        //{this,props.tabs.length need to be there else error}
        return (<div>
                <ul>
                    {this.renderButtons()}
                </ul>
        
            </div>)
    }
}

export default Accordion;