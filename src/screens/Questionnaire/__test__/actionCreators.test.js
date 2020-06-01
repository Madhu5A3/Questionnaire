import { types, addQuestions } from '../actionCreators/AddQuestion';

describe('actions', () => {
    it('Should Return the exact structure', () => {
        const data = [{ "id": 1, "content": "Madhu Kiran Varma" }];
        const expectedAction = {
            type: types.ADD_QUESTIONS,
            payload: data
        };
        expect(addQuestions(data)).toEqual(expectedAction);
    });
})