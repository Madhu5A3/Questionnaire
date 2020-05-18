const addQuestions = (id,data) => {
    return {
        type: 'ADD_QUESTIONS',
        payload: data
    }
}

export default addQuestions;
