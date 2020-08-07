import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import renderer from 'react-test-renderer';

describe ('Backdrop', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Backdrop />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Backdrop />)
            .toJSON()
        expect(tree).toMatchSnapshot()    
    })
})