export const addQuestions = (data) => {
    console.log('qa' + data)
    return {
        type: 'ADD_QUESTIONS',
        payload: data
    }
}
