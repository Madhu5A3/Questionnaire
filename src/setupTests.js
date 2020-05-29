import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';


describe('Home Component', () => {
    it('it should render without errors', () => {
        const component = shallow(<Home />);
        console.log(component.debug());
        // const wrapper = component.find('.questionContainer');
        //expect(wrapper.length).toBe(2);
    })
})
