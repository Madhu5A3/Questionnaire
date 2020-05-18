const addQuestions = (id,data) => {
    return {
        type: 'ADD_QUESTIONS',
        id:id,
        payload: data
    }
}

export default addQuestions;
