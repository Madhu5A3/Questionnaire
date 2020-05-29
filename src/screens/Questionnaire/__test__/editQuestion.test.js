import EditQuestion from '../components/EditQuestion';
import { checkProps } from '../../../../Utils/index';

describe('EditQuestion Component', () => {

    describe('Checking PropTypes', () => {

        it('It should not throw a warning', () => {
            const expectedPropTypes = {
                button_id: 1,
                button_content: 'India'
            };
            const propsInfo = checkProps(EditQuestion, expectedPropTypes);
            expect(propsInfo).toBeUndefined();
        })

    })
})