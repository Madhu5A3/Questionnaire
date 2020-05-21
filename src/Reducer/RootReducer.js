const initialState = {
    questions: []
};

/*type: 'EDIT_QUESTIONS',
        payload_id: id,
        payload: data*/

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            }
        case 'EDIT_QUESTIONS':
            const newState = state.questions.map((question) => {
                if (question.id === action.payload_id) {
                    const updateItem = action.payload;
                    return updateItem;
                }
                return question;
            });
            return {
                ...state,
                questions: newState
            }
        default:
            return state;
    }
}

export default RootReducer;