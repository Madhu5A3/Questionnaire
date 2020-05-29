import { types, addQuestions } from '../actionCreators/AddQuestion';
import QuestionnaireReducer from '../Reducer/QuestionnaireReducer';

describe('Questionnaire Reducer', () => {

    it('Should Return the default state', () => {
        const newState = QuestionnaireReducer({}, {});
        expect(newState).toEqual({});
    });

    it('Should Return the exact structure', () => {
        const data = [{ "id": 1, "content": "Madhu Kiran Varma" }];
        const expectedAction = {
            type: types.ADD_QUESTIONS,
            payload: data
        };
        expect(addQuestions(data)).toEqual(expectedAction);
    });

    it('Should return new state if receiving type', () => {
        const questions_data = [{ "id": 1, "content": "Madhu Kiran Varma" }];
        const newState = QuestionnaireReducer([], {
            type: types.ADD_QUESTIONS,
            payload: questions_data
        });
        expect(newState).toEqual({ questions: questions_data });
    })
});