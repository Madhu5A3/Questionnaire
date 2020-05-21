export const editQuestions = (id, data) => {
    return {
        type: 'EDIT_QUESTIONS',
        payload_id: id,
        payload: data
    }
<<<<<<< HEAD
}
=======
}


/*case 'EDIT_QUESTIONS':
let newStateQuestion = action.payload;
state.questions[action.id - 1].content = newStateQuestion;
return {
    ...state,
    questions: state.questions
}*/
>>>>>>> 1cafc2cb72a8877cd935a88d31d567664bdc9a8c
