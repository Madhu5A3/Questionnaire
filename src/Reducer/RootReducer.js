const initialState = {
    questions: []
};

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            }

        case 'EDIT_QUESTIONS':
            return {
                ...state,
                questions: {
                    [action.payload_id - 1]: {
                        id: action.payload_id,
                        content: action.payload
                    }
                }
            }
        default:
            return state;
    }
}

export default RootReducer;