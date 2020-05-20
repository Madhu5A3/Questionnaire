export const addQuestions = (data) => {
    return {
        type: 'ADD_QUESTIONS',
        payload: data
    }
}

export const editQuestions = (data) => {
    return {
        type: 'EDIT_QUESTIONS',
        payload: data
    }
}
