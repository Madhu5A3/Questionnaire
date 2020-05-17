import addQuestions from './AddQuestion';
// import { useState } from 'react';

const AddThunkQuestion = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/questions')
            .then(res => res.json())
            .then(res => {dispatch(addQuestions(res))})
    };
}

export default AddThunkQuestion;