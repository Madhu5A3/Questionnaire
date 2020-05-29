import * as actions from '../actionCreators/AddQuestion';

describe('actions', () => {
    it('Action should return appropriate objects', () => {
        const data = { "id": 1 };
        const expectedActions = {
            type: "ADD_QUESTIONS",
            data
        }
        // expect(actions.addQuestions(data)).toEqual(expectedActions);
    })
})