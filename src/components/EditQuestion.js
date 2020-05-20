import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { editQuestions } from '../actionCreators/AddQuestion';

const EditQuestion = (props) => {
    const [enteredValue, setOutputValue] = useState('');
    const { button_id } = props.location;
    const questionList = useSelector(state => state.questions);
    //console.log(button_id);
    //console.log(questionList[button_id - 1].content);
    //const { buttonid } = useParams();
    const handleEdit = (enteredText) => {
        setOutputValue(enteredText.target.value);
        // editQuestions(enteredValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    // console.log(enteredValue);
    return (
        <div className="questionEdit">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={questionList[button_id - 1].content} onChange={handleEdit} value={enteredValue}></input>
                <input type="submit"></input>
            </form>
        </div>
    );
};

export default EditQuestion;