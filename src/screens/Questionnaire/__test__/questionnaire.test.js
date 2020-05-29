import React from 'react';
import { shallow } from 'enzyme';
import QuestionBox from '../components/QuestionBox';
import { appAttr } from '../../../../Utils/index';

const questionnaireTest = (props = {}) => {
    // const component = shallow(<QuestionBox />);
    // return component;
}

describe('QuestionBox Component', () => {

    let component;
    beforeEach(() => {
        component = questionnaireTest();
    });

    it('it should render without errors', () => {
        //  const component = appTest();
        // console.log(component.debug());
        // const wrapper = appAttr(component, 'questionContainer');
        // expect(wrapper.length).toBe(1);
    })
})
