import React from 'react';
import renderer from 'react-test-renderer';
import TheDate from './TheDate';
import ReactDOM from 'react-dom';

describe('The Date component', () => {
    it('render without crashing', () =>{
        const div =document.createElement('div');
        ReactDOM.render(<TheDate />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it.skip('renders the UI as expected', ()=>{
        expect(
            renderer.create(<TheDate />).toJSON())
            .toMatchSnapshot()
    })
})