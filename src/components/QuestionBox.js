import React, { useCallback } from 'react';
// { useState, useEffect, useCallback } 
// import { connect } from 'react-redux';
// import { getQuestions } from '../Reducer/RootReducer';
import AddThunkQuestion from '../actionCreators/AddThunkQuestion';
// import addQuestions from '../actionCreators/AddQuestion';
import { useSelector, useDispatch } from 'react-redux';


const QuestionBox = (props) => {
    const dispatch = useDispatch();
    const questionsSelector = useSelector(state => state.questions);

    const thunkDispatcher = useCallback(
        () => dispatch(AddThunkQuestion()),
        [dispatch]
    )

    const questionList = questionsSelector.map(question => {
        return (
            <p key={question.id}>{question.content}</p>
        )
    })

    return (
        <div className="questionbox">
            <p>{questionList}</p>
            <button className="buttonContainer" onClick={thunkDispatcher}>Press</button>
        </div>
    )
}

export default QuestionBox;