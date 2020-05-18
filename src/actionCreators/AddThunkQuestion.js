import addQuestions from './AddQuestion';
// import { useState } from 'react';

const AddThunkQuestion = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/questions')
            .then(res => res.json())
            .then(res => {dispatch(addQuestions(Math.floor(Math.random()*3)+1,res))})
    };
}

export default AddThunkQuestion;