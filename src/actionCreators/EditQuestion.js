export const editQuestions = (id, data) => {
    return {
        type: 'EDIT_QUESTIONS',
        payload_id: id,
        payload: data
    }
}


/*case 'EDIT_QUESTIONS':
let newStateQuestion = action.payload;
state.questions[action.id - 1].content = newStateQuestion;
return {
    ...state,
    questions: state.questions
}*/
