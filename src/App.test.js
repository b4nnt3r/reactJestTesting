import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe('<App />', () => {
    test('it renders <App /> component', ()=> {
        const component = mount(<App />);
        expect(component).toHaveLength(1)
    })

    test('it increments counter on button click', () => {
        const wrapper = mount(<App />);
        wrapper.find(".btn-increment").simulate('click');// finish this statement using "simulate" and "expect" to test if the increment button was pressed and the score is 1.
        expect(wrapper.state('score')).toEqual(1)

        // test what happens if the decrement button is pressed....
        // hint: it should decrease to 0 if increment was just pressed.

    })

    test('it changes to green when score is > 0', () => {
        const component = mount(<App />);

        component.setState({score: 0});
        expect(component.instance().scoreColor()).toEqual('red');

        // test if the color will be green if it is a positive integer...
        component.setState({score: 1});
        expect(component.instance().scoreColor()).toEqual('green');
    })
})
