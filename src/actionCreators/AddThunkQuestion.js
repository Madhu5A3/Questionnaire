import addQuestions from './AddQuestion';

const AddThunkQuestion = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/questions')
            .then(res => res.json())
            .then(res => {dispatch(addQuestions(res))})
    };
}

export default AddThunkQuestion;