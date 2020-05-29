import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/Navbar';
import { appAttr } from '../../../../Utils/index';

const NavbarTest = (props = {}) => {
    //const component = shallow(<Navbar />);
    //console.log(component.debug());
    //return component;
}

describe('Navbar Component', () => {

    let component;
    beforeEach(() => {
        component = NavbarTest();
    });

    it('it should render without errors', () => {
        //const wrapper = appAttr(component, 'questionList');
        //console.log(wrapper)
        //expect(wrapper.length).toBe(1);
    })
})
