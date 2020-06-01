import { types, UserAction } from '../actionCreators/UserAction';

describe('UserProfile Action Creator', () => {
    it('Should have the same structure', () => {
        const data = [{ "Name": "Madhu Kiran Varma" }];
        const expectedAction = {
            type: types.USER_DATA,
            payload: data
        };
        expect(UserAction(data)).toEqual(expectedAction);
    })
});