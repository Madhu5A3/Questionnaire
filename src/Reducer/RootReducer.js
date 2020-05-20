const initialState = {
    questions: []
};

const RootReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_QUESTIONS':
            return {
                ...state,
                questions: action.payload
            }
        default:
            return state;
    }
}

export default RootReducer;