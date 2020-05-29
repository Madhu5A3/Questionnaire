import React from 'react';
import { shallow } from 'enzyme';
import QuestionBox from './QuestionBox';


describe('QuestionBox Component', () => {
    it('it should render without errors', () => {
        const component = shallow(<QuestionBox />);
        const wrapper = component.find('.questionContainer');
        expect(wrapper.length).toBe(2);
    })
})
