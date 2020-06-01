import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { appAttr } from '../../Utils/index';

const appTest = (props = {}) => {
    const component = shallow(<App {...props} />);
    return component;
}

describe('App Component', () => {
    let component;
    beforeEach(() => {
        component = appTest();
    });

    it('it should render without errors', () => {
        const wrapper = appAttr(component, 'App');
        expect(wrapper.length).toBe(1);
    })
})
