const initialState = {
    questions: []
};

const RootReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_QUESTIONS':
            let filtered_actions = action.payload.filter(question => {
                return question.id;
            })
            return {
                ...state,
                questions: filtered_actions
            }
        default:
            return state;
    }
}
// export const getQuestions = state => state.questions;
export default RootReducer;