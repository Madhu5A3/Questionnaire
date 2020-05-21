export const editQuestions = (id, data) => {
    return {
        type: 'EDIT_QUESTIONS',
        payload_id: id,
        payload: data
    }
}