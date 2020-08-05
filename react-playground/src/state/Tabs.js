import React from 'react';
class Tabs extends React.Component {
    static defaultProps = {tabs:[]};
    state ={currentTabIndex : 0}
    handleClick (index){
        console.log('clikc')
        this.setState({currentTabIndex :index})
    }
    renderButtons (){
        return this.props.tabs.map(
            (tab,index)=>(<button 
            onClick={() => this.handleClick(index)}
            key={index}>
                {tab.name}
            </button>))}
    renderContent () {
        const currentTab = this.props.tabs[this.state.currentTabIndex];
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    render(){
        
        //{this,props.tabs.length need to be there else error}
        return (<div>{this.renderButtons()}
        { !!this.props.tabs.length && this.renderContent()}
            </div>)
    }
}

export default Tabs;